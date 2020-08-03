/*
 * Copyright © 2014 - 2018 Leipzig University (Database Research Group)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradoop.demo.server;

import org.apache.avro.generic.GenericData;
import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.api.java.aggregation.AggregationFunction;
import org.apache.flink.api.java.aggregation.AggregationFunctionFactory;
import org.apache.flink.api.java.io.LocalCollectionOutputFormat;
import org.apache.flink.api.java.tuple.Tuple3;
import org.apache.flink.types.Nothing;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.gradoop.demo.server.functions.LabelGroupReducer;
import org.gradoop.demo.server.functions.LabelMapper;
import org.gradoop.demo.server.functions.LabelReducer;
import org.gradoop.demo.server.functions.PropertyKeyMapper;
import org.gradoop.demo.server.gen.io.swagger.model.*;
import org.gradoop.demo.server.oldApi.RequestHandler;
import org.gradoop.flink.model.api.functions.AggregateFunction;
import org.gradoop.flink.model.api.functions.KeyFunction;
import org.gradoop.flink.model.api.functions.KeyFunctionWithDefaultValue;
import org.gradoop.flink.model.impl.operators.aggregation.functions.BaseAggregateFunction;
import org.gradoop.flink.model.impl.operators.aggregation.functions.count.Count;
import org.gradoop.flink.model.impl.operators.aggregation.functions.max.Max;
import org.gradoop.flink.model.impl.operators.aggregation.functions.max.MaxProperty;
import org.gradoop.flink.model.impl.operators.aggregation.functions.min.MinProperty;
import org.gradoop.flink.model.impl.operators.aggregation.functions.sum.SumProperty;
import org.gradoop.flink.model.impl.operators.keyedgrouping.GroupingKeys;
import org.gradoop.flink.model.impl.operators.keyedgrouping.KeyedGrouping;
import org.gradoop.flink.model.impl.operators.keyedgrouping.labelspecific.LabelSpecificKeyFunction;
import org.gradoop.temporal.io.impl.csv.TemporalCSVDataSource;
import org.gradoop.temporal.model.api.functions.TemporalPredicate;
import org.gradoop.temporal.model.impl.TemporalGraph;
import org.gradoop.temporal.model.impl.TemporalGraphCollection;
import org.gradoop.temporal.model.impl.functions.predicates.*;
import org.gradoop.temporal.model.impl.operators.aggregation.functions.*;
import org.gradoop.temporal.model.impl.operators.keyedgrouping.TemporalGroupingKeys;
import org.gradoop.temporal.model.impl.pojo.TemporalEdge;
import org.gradoop.temporal.model.impl.pojo.TemporalGraphHead;
import org.gradoop.temporal.model.impl.pojo.TemporalVertex;
import org.gradoop.temporal.util.TemporalGradoopConfig;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.temporal.ChronoField;
import java.time.temporal.TemporalUnit;
import java.util.*;

/**
 * Service implementing the temporal Graph Functionality
 */
public class TemporalGraphService {

    private final String META_FILENAME = "/metadata.json";

    private static final ExecutionEnvironment ENV = ExecutionEnvironment.createLocalEnvironment();
    private TemporalGradoopConfig config = TemporalGradoopConfig.createConfig(ENV);

    public Response getKeysAndLabels(String databaseName) {
        URL meta = RequestHandler.class.getResource("/data/" + databaseName + META_FILENAME);
        try {
            if (meta == null) {
                JSONObject result = computeKeysAndLabels(databaseName);
                if (result == null) {
                    return Response.serverError().build();
                }
                return Response.ok(result.toString()).build();
            } else {
                JSONObject result = readKeysAndLabels(databaseName);
                if (result == null) {
                    return Response.serverError().build();
                }
                return Response.ok(readKeysAndLabels(databaseName).toString()).build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            // if any exception is thrown, return an error to the client
            return Response.serverError().build();
        }
    }

    public Response difference(DifferenceRequest differenceRequest) {

        String databaseName = differenceRequest.getDbName();

        String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();
        TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);
        TemporalGraph graph = source.getTemporalGraph();
        try {
            TemporalPredicate from = this.convertTemporalPredicate(differenceRequest.getFrom());
            TemporalPredicate to = this.convertTemporalPredicate(differenceRequest.getTo());
            org.gradoop.temporal.model.api.TimeDimension timeDimension = this.transformTimeDim(differenceRequest.getTimeDim());
            TemporalGraph diff = graph.diff(from, to, timeDimension);
            return this.createResponse(diff);
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }

    public Response snapshot(SnapshotRequest snapshotRequest) {

        String databaseName = snapshotRequest.getDbName();

        String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();
        TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);
        TemporalGraph graph = source.getTemporalGraph();

        try {
            TemporalPredicate timeStamp = this.convertTemporalPredicate(snapshotRequest.getTimeStamp());
            org.gradoop.temporal.model.api.TimeDimension timeDimension = this.transformTimeDim(snapshotRequest.getTimeDim());
            TemporalGraph snapshot = graph.snapshot(timeStamp,timeDimension);
            return this.createResponse(snapshot);
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }

    public Response getGraphs() {
        ArrayList<String> result = new ArrayList<>();
        result.add("Citibike1");
        result.add("Citibike100");
        return Response.ok().entity(result).build();
    }

    public Response getGraph(String databaseName) throws Exception {

        String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();

        TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);

        TemporalGraph graph = source.getTemporalGraph();


        String json = CytoJSONBuilder.getJSONString(
                graph.getGraphHead().collect(),
                graph.getVertices().collect(),
                graph.getEdges().collect());

        return Response.ok(json).build();
    }

    public Response grouping(GroupingRequest request) {
        try {
            //load the database
            String databaseName = request.getDbName();

            String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();

            TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);

            TemporalGraph graph = source.getTemporalGraph();
            List<KeyFunction<TemporalVertex, ?>> vertexKeys = this.transformVertexGroupingKeys(request.getVertexKeys());
            List<AggregateFunction> vertexAggregation = this.transformAggregationFunctions(request.getVertexAggrFuncs());
            List<KeyFunction<TemporalEdge, ?>> edgeKeys = this.transformEdgeGroupingKeys(request.getEdgeKeys());
            List<AggregateFunction> edgeAggregation = this.transformAggregationFunctions(request.getEdgeAggrFuncs());

            //graph = graph.callForGraph(new KeyedGrouping<>(vertexKeys, Collections.singletonList(new Count("count")),Collections.singletonList(GroupingKeys.label()),Collections.singletonList(new Count("count"))));
            graph = graph.callForGraph(new KeyedGrouping<TemporalGraphHead, TemporalVertex, TemporalEdge, TemporalGraph, TemporalGraphCollection>(
                    // Vertex grouping keys (label and week of year)
                    vertexKeys,
                    // Vertex aggregation functions (count, average duration, first and last start)
                    vertexAggregation,
                    // Edge grouping keys (label)
                    edgeKeys,
                    // Edge aggregation functions (count)
                    edgeAggregation));

            // print the grouped and aggregated graph
            graph.print();
            // specify the output collections
            return createResponse(graph);
        }
        catch(Exception ex){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**---------------------------------------PRIVATE HELPER-------------------------------------------**/

    //Transformation for grouping from custom pojos to the Objects required by Gradoop
    private List<AggregateFunction>transformAggregationFunctions(List<AggregationKey> aggrFuncs){
        List<AggregateFunction> res = new ArrayList<>();
        for (AggregationKey aggrFunc: aggrFuncs) {
            if(aggrFunc.getName()==null){
                aggrFunc.setName(aggrFunc.getAggregationType().toString());
            }
            switch(aggrFunc.getAggregationType()){
                case MAX:
                    res.add(new MaxProperty(aggrFunc.getProperty()));
                    break;
                case MIN:
                    res.add(new MinProperty(aggrFunc.getProperty()));
                    break;
                case SUM:
                    res.add(new SumProperty(aggrFunc.getProperty()));
                    break;
                case COUNT:
                    res.add(new Count());
                    break;
                case MAXTIME:
                    res.add(new MaxTime(aggrFunc.getName(),transformTimeDim(aggrFunc.getTimeDim()),transformTimeField(aggrFunc.getTimeField())));
                    break;
                case MINTIME:
                    res.add(new MinTime(aggrFunc.getName(),transformTimeDim(aggrFunc.getTimeDim()),transformTimeField(aggrFunc.getTimeField())));
                    break;
                case MAXDURATION:
                    res.add(new MaxDuration(aggrFunc.getName(),transformTimeDim(aggrFunc.getTimeDim())));
                    break;
                case MINDURATION:
                    res.add(new MinDuration(aggrFunc.getName(),transformTimeDim(aggrFunc.getTimeDim())));
                    break;
                case AVERAGEDURATION:
                    res.add(new AverageDuration(aggrFunc.getName(),transformTimeDim(aggrFunc.getTimeDim())));
                    break;
                case NONE:
                default:
                    break;
            }
        }
        return res;
    }

    //TODO remove duplicate Code.
    private List<KeyFunction<TemporalVertex, ?>> transformVertexGroupingKeys(List<GroupingKey> groupingKeys){
        List<KeyFunction<TemporalVertex, ?>> res = new ArrayList<>();
        for (GroupingKey groupingKey: groupingKeys) {
            switch(groupingKey.getGroupingType()){
                case LABEL:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(GroupingKeys.label());
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),Collections.singletonList(GroupingKeys.label()));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case DURATION:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()),transformChronoUnit(groupingKey.getChronoUnit())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()),transformChronoUnit(groupingKey.getChronoUnit())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case PROPERTY:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(GroupingKeys.property(groupingKey.getProperty()));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),Collections.singletonList(GroupingKeys.property(groupingKey.getProperty())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case TIMESTAMP:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case TIMEINTERVAL:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                break;
                case TIMESTAMPFIELD:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField()),transformChronoField(groupingKey.getChronoField())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField()),transformChronoField(groupingKey.getChronoField())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case NOTHING:
                default:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(GroupingKeys.nothing());
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),Collections.singletonList(GroupingKeys.nothing()));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
            }
        }
        return res;
    }


    private List<KeyFunction<TemporalEdge, ?>> transformEdgeGroupingKeys(List<GroupingKey> groupingKeys){
        List<KeyFunction<TemporalEdge, ?>> res = new ArrayList<>();
        for (GroupingKey groupingKey: groupingKeys) {
            switch(groupingKey.getGroupingType()){
                case LABEL:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(GroupingKeys.label());
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),Collections.singletonList(GroupingKeys.label()));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case DURATION:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()),transformChronoUnit(groupingKey.getChronoUnit())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()),transformChronoUnit(groupingKey.getChronoUnit())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case PROPERTY:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(GroupingKeys.property(groupingKey.getProperty()));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),Collections.singletonList(GroupingKeys.property(groupingKey.getProperty())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case TIMESTAMP:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case TIMEINTERVAL:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                break;
                case TIMESTAMPFIELD:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField()),transformChronoField(groupingKey.getChronoField())));
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()),transformTimeField(groupingKey.getTimeField()),transformChronoField(groupingKey.getChronoField())));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
                case NOTHING:
                default:
                    if(!groupingKey.isLabelSpecific()){
                        res.add(GroupingKeys.nothing());
                    }
                    else{
                        if(groupingKey.getLabel()!=null){
                            Map localMap = new HashMap<>();
                            localMap.put(groupingKey.getLabel(),Collections.singletonList(GroupingKeys.nothing()));
                            localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL,Collections.singletonList(GroupingKeys.label()));
                            res.add(GroupingKeys.labelSpecific(localMap));
                        }
                    }
                    break;
            }
        }
        return res;
    }

    private org.gradoop.temporal.model.api.TimeDimension.Field transformTimeField(TimeField timeField){
        switch(timeField){
            case TO:
                return org.gradoop.temporal.model.api.TimeDimension.Field.TO;
            case FROM:
            default:
                return org.gradoop.temporal.model.api.TimeDimension.Field.FROM;
        }
    }

    private TemporalUnit transformChronoUnit(org.gradoop.demo.server.gen.io.swagger.model.ChronoUnit chronoUnit){
        switch(chronoUnit){
            case CENTURIES:
                return java.time.temporal.ChronoUnit.CENTURIES;
            case DAYS:
                return java.time.temporal.ChronoUnit.DAYS;
            case ERAS:
                return java.time.temporal.ChronoUnit.ERAS;
            case HOURS:
                return java.time.temporal.ChronoUnit.HOURS;
            case NANOS:
                return java.time.temporal.ChronoUnit.NANOS;
            case WEEKS:
                return java.time.temporal.ChronoUnit.WEEKS;
            case YEARS:
                return java.time.temporal.ChronoUnit.YEARS;
            case MICROS:
                return java.time.temporal.ChronoUnit.MICROS;
            case MILLIS:
                return java.time.temporal.ChronoUnit.MILLIS;
            case MONTHS:
                return java.time.temporal.ChronoUnit.MONTHS;
            case DECADES:
                return java.time.temporal.ChronoUnit.DECADES;
            case FOREVER:
                return java.time.temporal.ChronoUnit.FOREVER;
            case MINUTES:
                return java.time.temporal.ChronoUnit.MINUTES;
            case SECONDS:
                return java.time.temporal.ChronoUnit.SECONDS;
            case HALFDAYS:
                return java.time.temporal.ChronoUnit.HALF_DAYS;
            case MILLENIA:
            default:
                return java.time.temporal.ChronoUnit.MILLENNIA;
        }
    }

    private ChronoField transformChronoField(org.gradoop.demo.server.gen.io.swagger.model.ChronoField chronoField){
        switch(chronoField){
            case ALIGNEDDAYOFWEEKINMONTH:
                return ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH;
            case ALIGNEDDAYOFWEEKINYEAR:
                return ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR;
            case AMPMOFDAY:
                return ChronoField.AMPM_OF_DAY;
            case CLOCKHOUROFDAY:
                return ChronoField.CLOCK_HOUR_OF_DAY;
            case ALIGNEDWEEKOFMONTH:
                return ChronoField.ALIGNED_WEEK_OF_MONTH;
            case ALIGNEDWEEKOFYEAR:
                return ChronoField.ALIGNED_WEEK_OF_YEAR;
            case  DAYOFMONTH:
                return ChronoField.DAY_OF_MONTH;
            case DAYOFWEEK:
                return ChronoField.DAY_OF_WEEK;
            case DAYOFYEAR:
                return ChronoField.DAY_OF_YEAR;
            case EPOCHDAY:
                return ChronoField.EPOCH_DAY;
            case ERA:
                return ChronoField.ERA;
            case HOUROFAMPM:
                return ChronoField.HOUR_OF_AMPM;
            case HOUROFDAY:
                return ChronoField.HOUR_OF_DAY;
            case INTANTSECONDS:
                return ChronoField.INSTANT_SECONDS;
            case  MICROOFDAY:
                return ChronoField.MICRO_OF_DAY;
            case MICROOFSECOND:
                return ChronoField.MICRO_OF_SECOND;
            case MILLIOFDAY:
                return ChronoField.MILLI_OF_DAY;
            case MILLIOFSECOND:
                return ChronoField.MILLI_OF_SECOND;
            case MINUTEOFDAY:
                return ChronoField.MINUTE_OF_DAY;
            case MINUTEOFHOUR:
                return ChronoField.MINUTE_OF_HOUR;
            case MONTHOFYEAR:
                return ChronoField.MONTH_OF_YEAR;
            case NANOOFDAY:
                return ChronoField.NANO_OF_DAY;
            case NANOOFSECOND:
                return ChronoField.NANO_OF_SECOND;
            case OFFSETSECONDS:
                return ChronoField.OFFSET_SECONDS;
            case PROLEPTICMONTH:
                return ChronoField.PROLEPTIC_MONTH;
            case SECONDOFDAY:
                return ChronoField.SECOND_OF_DAY;
            case SECONDOFMINUTE:
                return ChronoField.SECOND_OF_MINUTE;
            case YEAROFERA:
                return ChronoField.YEAR_OF_ERA;
            case YEAR:
            default:
                return ChronoField.YEAR;
        }
    }
    private org.gradoop.temporal.model.api.TimeDimension transformTimeDim(TimeDimension timeDim){
        switch(timeDim){
            case TRANSACTIONTIME:
                return org.gradoop.temporal.model.api.TimeDimension.TRANSACTION_TIME;
            case VALIDTIME:
            default:
                return org.gradoop.temporal.model.api.TimeDimension.VALID_TIME;
        }

    }
    /**
     * Compute property keys and labels.
     * @param databaseName name of the database
     * @return JSONObject containing property keys and labels
     */
    private JSONObject computeKeysAndLabels(String databaseName) throws IOException {

        URL resource = RequestHandler.class.getResource("/data/"+databaseName);
        String path = resource.getPath();
        TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);

        TemporalGraph graph = source.getTemporalGraph();

        JSONObject jsonObject = new JSONObject();

        //compute the vertex and edge property keys and return them
        try {
            jsonObject.put("vertexKeys", getVertexKeys(graph));
            jsonObject.put("edgeKeys", getEdgeKeys(graph));
            jsonObject.put("vertexLabels", getVertexLabels(graph));
            jsonObject.put("edgeLabels", getEdgeLabels(graph));
            String dataPath = RequestHandler.class.getResource("/data/" + databaseName).getFile();
            FileWriter writer = new FileWriter(dataPath + META_FILENAME);
            jsonObject.write(writer);
            writer.flush();
            writer.close();

            return jsonObject;
        } catch (Exception e) {
            e.printStackTrace();
            // if any exception is thrown, return an error to the client
            return null;
        }
    }

    /**
     * Read the property keys and labels from the buffered JSON.
     * @param databaseName name of the database
     * @return JSONObject containing the property keys and labels
     * @throws IOException if reading fails
     * @throws JSONException if JSON creation fails
     */
    private JSONObject readKeysAndLabels(String databaseName) throws IOException, JSONException, URISyntaxException {
        String dataPath = Paths.get(RequestHandler.class.getResource("/data/" + databaseName).toURI()).toString();
        String content = new String(Files.readAllBytes(Paths.get(dataPath + META_FILENAME)), StandardCharsets.UTF_8);

        return new JSONObject(content);
    }

    /**
     * Takes any given graph and creates a JSONArray containing the vertex property keys and a
     * boolean,
     * specifying it the property has a numerical type.
     *
     * @param graph input graph
     * @return  JSON array with property keys and boolean, that is true if the property type is
     * numercial
     * @throws Exception if the collecting of the distributed data fails
     */
    private JSONArray getVertexKeys(TemporalGraph graph) throws Exception {

        List<Tuple3<Set<String>, String, Boolean>> vertexKeys = graph.getVertices()
                .flatMap(new PropertyKeyMapper<>())
                .groupBy(1)
                .reduceGroup(new LabelGroupReducer())
                .collect();

        return buildArrayFromKeys(vertexKeys);
    }

    /**
     * Takes any given graph and creates a JSONArray containing the edge property keys and a boolean,
     * specifying it the property has a numerical type.
     *
     * @param graph input graph
     * @return  JSON array with property keys and boolean, that is true if the property type is
     * numercial
     * @throws Exception if the collecting of the distributed data fails
     */
    private JSONArray getEdgeKeys(TemporalGraph graph) throws Exception {

        List<Tuple3<Set<String>, String, Boolean>> edgeKeys = graph.getEdges()
                .flatMap(new PropertyKeyMapper<>())
                .groupBy(1)
                .reduceGroup(new LabelGroupReducer())
                .collect();

        return buildArrayFromKeys(edgeKeys);
    }

    /**
     * Convenience method.
     * Takes a set of tuples of property keys and booleans, specifying if the property is numerical,
     * and creates a JSON array containing the same data.
     *
     * @param keys set of tuples of property keys and booleans, that are true if the property type
     *             is numerical
     * @return JSONArray containing the same data as the input
     * @throws JSONException if the construction of the JSON fails
     */
    private JSONArray buildArrayFromKeys(List<Tuple3<Set<String>, String, Boolean>> keys)
            throws JSONException {
        JSONArray keyArray = new JSONArray();
        for(Tuple3<Set<String>, String, Boolean> key : keys) {
            JSONObject keyObject = new JSONObject();
            JSONArray labels = new JSONArray();
            key.f0.forEach(labels::put);
            keyObject.put("labels", labels);
            keyObject.put("name", key.f1);
            keyObject.put("numerical", key.f2);
            keyArray.put(keyObject);
        }
        return keyArray;
    }

    /**
     * Compute the labels of the vertices.
     *
     * @param graph logical graph
     * @return JSONArray containing the vertex labels
     * @throws Exception if the computation fails
     */
    private JSONArray getVertexLabels(TemporalGraph graph) throws Exception {
        List<Set<String>> vertexLabels = graph.getVertices()
                .map(new LabelMapper<>())
                .reduce(new LabelReducer())
                .collect();

        if(vertexLabels.size() > 0) {
            return buildArrayFromLabels(vertexLabels.get(0));
        } else {
            return new JSONArray();
        }
    }

    /**
     * Compute the labels of the edges.
     *
     * @param graph logical graph
     * @return JSONArray containing the edge labels
     * @throws Exception if the computation fails
     */
    private JSONArray getEdgeLabels(TemporalGraph graph) throws Exception {
        List<Set<String>> edgeLabels = graph.getEdges()
                .map(new LabelMapper<>())
                .reduce(new LabelReducer())
                .collect();

        if(edgeLabels.size() > 0) {
            return buildArrayFromLabels(edgeLabels.get(0));
        } else {
            return new JSONArray();
        }
    }

    /**
     * Create a JSON array from the sets of labels.
     *
     * @param labels set of labels
     * @return JSON array of labels
     */
    private JSONArray buildArrayFromLabels(Set<String> labels) {
        JSONArray labelArray = new JSONArray();
        labels.forEach(labelArray::put);
        return labelArray;
    }

    private TemporalPredicate convertTemporalPredicate(TimeStamp timeStamp) throws Exception {
        TemporalPredicate result;
        switch (timeStamp.getPredicate()){
            case ASOF:
                result= new AsOf(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case BETWEEN:
                result = new Between(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case FROMTO:
                result = new FromTo(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case OVERLAPS:
                result= new Overlaps(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case PRECEDES:
                result= new Precedes(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case SUCCEEDS:
                result= new Succeeds(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case CREATEDIN:
                result= new CreatedIn(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case DELETEDIN:
                result= new DeletedIn(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case CONTAINEDIN:
                result = new ContainedIn(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            case ALL:
                result= new All();
                break;
            case VALIDDURING:
                result= new ValidDuring(timeStamp.getStartDate().toInstant().plusMillis(3600000).toEpochMilli(),timeStamp.getEndDate().toInstant().plusMillis(3600000).toEpochMilli());
                break;
            default:
                throw new Exception("Not a valid Predicate");
        }
        return result;
    }

    private Response createResponse(TemporalGraphCollection graph) {
        List<TemporalGraphHead> resultHead = new ArrayList<>();
        List<TemporalVertex> resultVertices = new ArrayList<>();
        List<TemporalEdge> resultEdges = new ArrayList<>();

        graph.getGraphHeads().output(new LocalCollectionOutputFormat<>(resultHead));
        graph.getVertices().output(new LocalCollectionOutputFormat<>(resultVertices));
        graph.getEdges().output(new LocalCollectionOutputFormat<>(resultEdges));

        return getResponse(resultHead, resultVertices, resultEdges);
    }

    private Response createResponse(TemporalGraph graph) {
        List<TemporalGraphHead> resultHead = new ArrayList<>();
        List<TemporalVertex> resultVertices = new ArrayList<>();
        List<TemporalEdge> resultEdges = new ArrayList<>();

        graph.getGraphHead().output(new LocalCollectionOutputFormat<>(resultHead));
        graph.getVertices().output(new LocalCollectionOutputFormat<>(resultVertices));
        graph.getEdges().output(new LocalCollectionOutputFormat<>(resultEdges));

        return getResponse(resultHead, resultVertices, resultEdges);
    }

    private Response getResponse(
            List<TemporalGraphHead> resultHead,
            List<TemporalVertex> resultVertices,
            List<TemporalEdge> resultEdges) {
        try {
            ENV.execute();
            // build the response JSON from the collections
            String res = CytoJSONBuilder.getJSONString(resultHead, resultVertices, resultEdges);
            return Response.ok(res).build();

        } catch (Exception e) {
            e.printStackTrace();
            // if any exception is thrown, return an error to the client
            return Response.serverError().build();
        }
    }
}