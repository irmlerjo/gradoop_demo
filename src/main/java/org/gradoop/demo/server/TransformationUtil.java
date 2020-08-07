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

import org.gradoop.common.model.impl.properties.Property;
import org.gradoop.demo.server.gen.io.swagger.model.*;
import org.gradoop.flink.model.api.functions.AggregateFunction;
import org.gradoop.flink.model.api.functions.KeyFunction;
import org.gradoop.flink.model.impl.operators.aggregation.functions.count.Count;
import org.gradoop.flink.model.impl.operators.aggregation.functions.max.MaxProperty;
import org.gradoop.flink.model.impl.operators.aggregation.functions.min.MinProperty;
import org.gradoop.flink.model.impl.operators.aggregation.functions.sum.SumProperty;
import org.gradoop.flink.model.impl.operators.keyedgrouping.GroupingKeys;
import org.gradoop.flink.model.impl.operators.keyedgrouping.labelspecific.LabelSpecificKeyFunction;
import org.gradoop.temporal.model.api.functions.TemporalPredicate;
import org.gradoop.temporal.model.impl.functions.predicates.*;
import org.gradoop.temporal.model.impl.operators.aggregation.functions.*;
import org.gradoop.temporal.model.impl.operators.keyedgrouping.TemporalGroupingKeys;
import org.gradoop.temporal.model.impl.pojo.TemporalEdge;
import org.gradoop.temporal.model.impl.pojo.TemporalGraphHead;
import org.gradoop.temporal.model.impl.pojo.TemporalVertex;

import java.time.temporal.ChronoField;
import java.time.temporal.TemporalUnit;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Service for Transforming Objects defined by the API, to Objects which can be used by Gradoop.
 */
public class TransformationUtil {

    /**
     * For Some Reason when transforming TimePredicates an inaccuracy of one hour is introduced
     * This Constant is used to fix this.
     */
    private static final int TIMEZONE_INACCURACY = 3600000;

    /**
     * Transforms AggregationKey TransferObject to one of Gradoops AggregateFunctions
     * Used for grouping Operator
     *
     * @param aggrFuncs
     * @return
     */
    public static List<AggregateFunction> transformAggregationFunctions(List<AggregationKey> aggrFuncs) {
        List<AggregateFunction> res = new ArrayList<>();
        for (AggregationKey aggrFunc : aggrFuncs) {
            if (aggrFunc.getName() == null) {
                aggrFunc.setName(aggrFunc.getAggregationType().toString());
            }
            switch (aggrFunc.getAggregationType()) {
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
                    res.add(new MaxTime(aggrFunc.getName(), transformTimeDim(aggrFunc.getTimeDim()), transformTimeField(aggrFunc.getTimeField())));
                    break;
                case MINTIME:
                    res.add(new MinTime(aggrFunc.getName(), transformTimeDim(aggrFunc.getTimeDim()), transformTimeField(aggrFunc.getTimeField())));
                    break;
                case MAXDURATION:
                    res.add(new MaxDuration(aggrFunc.getName(), transformTimeDim(aggrFunc.getTimeDim())));
                    break;
                case MINDURATION:
                    res.add(new MinDuration(aggrFunc.getName(), transformTimeDim(aggrFunc.getTimeDim())));
                    break;
                case AVERAGEDURATION:
                    res.add(new AverageDuration(aggrFunc.getName(), transformTimeDim(aggrFunc.getTimeDim())));
                    break;
                case NONE:
                default:
                    break;
            }
        }
        return res;
    }

    /**
     * Transforms GroupingKey TransferObject to a temporal Key Function used by Gradoop
     * Used for grouping
     *
     * @param groupingKeys
     * @return List of Grouping Keys for vertices consumed by Gradoops grouping Operator
     */
    public static List<KeyFunction<TemporalVertex, ?>> transformVertexGroupingKeys(List<GroupingKey> groupingKeys) {
        List<KeyFunction<TemporalVertex, ?>> res = new ArrayList<>();
        for (GroupingKey groupingKey : groupingKeys) {
            if (groupingKey.isForVertex()) {
                switch (groupingKey.getGroupingType()) {
                    case LABEL:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(GroupingKeys.label());
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), Collections.singletonList(GroupingKeys.label()));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case DURATION:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()), transformChronoUnit(groupingKey.getChronoUnit())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()), transformChronoUnit(groupingKey.getChronoUnit())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case PROPERTY:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(GroupingKeys.property(groupingKey.getProperty()));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), Collections.singletonList(GroupingKeys.property(groupingKey.getProperty())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case TIMESTAMP:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case TIMEINTERVAL:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case TIMESTAMPFIELD:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField()), transformChronoField(groupingKey.getChronoField())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField()), transformChronoField(groupingKey.getChronoField())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case NOTHING:
                    default:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(GroupingKeys.nothing());
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), Collections.singletonList(GroupingKeys.nothing()));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                }
            }
        }
        return res;
    }
    /**
     * Transforms GroupingKey TransferObject to a temporal Key Function used by Gradoop
     * Used for grouping
     *
     * @param groupingKeys
     * @return List of Grouping Keys for edges consumed by Gradoops grouping Operator
     */
    public static List<KeyFunction<TemporalEdge, ?>> transformEdgeGroupingKeys(List<GroupingKey> groupingKeys) {
        List<KeyFunction<TemporalEdge, ?>> res = new ArrayList<>();
        for (GroupingKey groupingKey : groupingKeys) {
            if (!groupingKey.isForVertex()) {
                switch (groupingKey.getGroupingType()) {
                    case LABEL:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(GroupingKeys.label());
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), Collections.singletonList(GroupingKeys.label()));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case DURATION:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()), transformChronoUnit(groupingKey.getChronoUnit())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.duration(transformTimeDim(groupingKey.getTimeDim()), transformChronoUnit(groupingKey.getChronoUnit())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case PROPERTY:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(GroupingKeys.property(groupingKey.getProperty()));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), Collections.singletonList(GroupingKeys.property(groupingKey.getProperty())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case TIMESTAMP:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case TIMEINTERVAL:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.timeInterval(transformTimeDim(groupingKey.getTimeDim())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.timeInterval(transformTimeDim(groupingKey.getTimeDim())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case TIMESTAMPFIELD:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField()), transformChronoField(groupingKey.getChronoField())));
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), TemporalGroupingKeys.timeStamp(transformTimeDim(groupingKey.getTimeDim()), transformTimeField(groupingKey.getTimeField()), transformChronoField(groupingKey.getChronoField())));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                    case NOTHING:
                    default:
                        if (!groupingKey.isLabelSpecific()) {
                            res.add(GroupingKeys.nothing());
                        } else {
                            if (groupingKey.getLabel() != null) {
                                Map localMap = new HashMap<>();
                                localMap.put(groupingKey.getLabel(), Collections.singletonList(GroupingKeys.nothing()));
                                localMap.put(LabelSpecificKeyFunction.DEFAULT_GROUP_LABEL, Collections.singletonList(GroupingKeys.label()));
                                res.add(GroupingKeys.labelSpecific(localMap));
                            }
                        }
                        break;
                }
            }
        }
        return res;
    }

     /**
     * Transforms TimeField TransferObject to a TimeDimension.Field consumed by temporal Gradoop operators
     *
     * @param timeField
     * @return
     */
    public static org.gradoop.temporal.model.api.TimeDimension.Field transformTimeField(TimeField timeField) {
        switch (timeField) {
            case TO:
                return org.gradoop.temporal.model.api.TimeDimension.Field.TO;
            case FROM:
            default:
                return org.gradoop.temporal.model.api.TimeDimension.Field.FROM;
        }
    }
    /**
     * Transforms ChronoUnit TransferObject to a ChronoUnit consumed by temporal Gradoop operators
     *
     * @param chronoUnit
     * @return
     */
    public static TemporalUnit transformChronoUnit(org.gradoop.demo.server.gen.io.swagger.model.ChronoUnit chronoUnit) {
        switch (chronoUnit) {
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

    /**
     * Transforms Transferobject Chrono Field to the java.time.temporal.ChronoField consumed by temporal Gradoop operators
     *
     * @param chronoField
     * @return
     */
    public static ChronoField transformChronoField(org.gradoop.demo.server.gen.io.swagger.model.ChronoField chronoField) {
        switch (chronoField) {
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
            case DAYOFMONTH:
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
            case MICROOFDAY:
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

    /**
     * Transforms Transferobject TimeDimension to TimeDimension consumed by temporal Gradoop operators
     *
     * @param timeDim
     * @return
     */
    public static org.gradoop.temporal.model.api.TimeDimension transformTimeDim(TimeDimension timeDim) {
        switch (timeDim) {
            case TRANSACTIONTIME:
                return org.gradoop.temporal.model.api.TimeDimension.TRANSACTION_TIME;
            case VALIDTIME:
            default:
                return org.gradoop.temporal.model.api.TimeDimension.VALID_TIME;
        }
    }

    public static Graph createGraphTransferObject(List<TemporalGraphHead> temporalGraphHeads,
                                                  List<TemporalVertex> temporalVertices,
                                                  List<TemporalEdge> temporalEdges) {
        Graph res = new Graph();
        res.setType("graph"); //Set Type to 'graph'


        /*********** SET GraphHead ***************/
        Node graphHead = new Node();
        NodeData graphHeadData = new NodeData();
        List<NodeDataProperties> graphHeadDataProperties = new ArrayList<>();
        if (temporalGraphHeads.size() > 0) {
            TemporalGraphHead mainHead = temporalGraphHeads.get(0);
            graphHeadData.setId(mainHead.getId().toString());
            graphHeadData.setLabel(mainHead.getLabel());
            if (mainHead.getProperties() != null) {
                for (Property prop : mainHead.getProperties()) {
                    NodeDataProperties singleProperty = new NodeDataProperties();
                    singleProperty.setKey(prop.getKey());
                    singleProperty.setValue(prop.getValue().toString());
                    graphHeadDataProperties.add(singleProperty);
                }
            }
            graphHeadData.setProperties(graphHeadDataProperties);
            graphHead.setData(graphHeadData);
        }
        res.setGraphs(graphHead);

        /***********SET Edges ***************/
        List<Edge> edges = temporalEdges.stream().map((TemporalEdge temporalEdge) -> {
            Edge currEdge = new Edge();
            EdgeData currEdgeData = new EdgeData();
            List<EdgeDataProperties> currEdgeDataProperties = new ArrayList<>();

            currEdgeData.setId(temporalEdge.getId().toString());
            currEdgeData.setLabel(temporalEdge.getLabel());
            currEdgeData.setSource(temporalEdge.getSourceId().toString());
            currEdgeData.setTarget(temporalEdge.getTargetId().toString());
            if (temporalEdge.getProperties() != null) {
                for (Property prop : temporalEdge.getProperties()) {
                    EdgeDataProperties singleProperty = new EdgeDataProperties();
                    singleProperty.setKey(prop.getKey());
                    singleProperty.setValue(prop.getValue().toString());
                    currEdgeDataProperties.add(singleProperty);
                }
            }
            currEdgeData.setProperties(currEdgeDataProperties);
            currEdge.setData(currEdgeData);
            return currEdge;
        }).collect(Collectors.toList());
        res.setEdges(edges);

        /***********Set Vertices ***************/
        List<Node> nodes = temporalVertices.stream().map((TemporalVertex temporalVertex) -> {
            Node currNode = new Node();
            NodeData currNodeData = new NodeData();
            List<NodeDataProperties> currNodeDataProperties = new ArrayList<>();

            currNodeData.setId(temporalVertex.getId().toString());
            currNodeData.setLabel(temporalVertex.getLabel());
            if (temporalVertex.getProperties() != null) {
                for (Property prop : temporalVertex.getProperties()) {
                    NodeDataProperties singleProperty = new NodeDataProperties();
                    singleProperty.setKey(prop.getKey());
                    singleProperty.setValue(prop.getValue().toString());
                    currNodeDataProperties.add(singleProperty);
                }
            }
            currNodeData.setProperties(currNodeDataProperties);
            currNode.setData(currNodeData);
            return currNode;
        }).collect(Collectors.toList());
        res.setNodes(nodes);

        return res;
    }

    public static org.gradoop.temporal.model.api.functions.TemporalPredicate convertTemporalPredicate(TimeStamp timeStamp) throws Exception {
        TemporalPredicate result;
        switch (timeStamp.getPredicate()) {
            case ASOF:
                result = new AsOf(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case BETWEEN:
                result = new Between(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case FROMTO:
                result = new FromTo(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case OVERLAPS:
                result = new Overlaps(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case PRECEDES:
                result = new Precedes(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case SUCCEEDS:
                result = new Succeeds(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case CREATEDIN:
                result = new CreatedIn(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case DELETEDIN:
                result = new DeletedIn(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case CONTAINEDIN:
                result = new ContainedIn(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            case ALL:
                result = new All();
                break;
            case VALIDDURING:
                result = new ValidDuring(timeStamp.getStartDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli(), timeStamp.getEndDate().toInstant().plusMillis(TIMEZONE_INACCURACY).toEpochMilli());
                break;
            default:
                throw new Exception("Not a valid Predicate");
        }
        return result;
    }
}
