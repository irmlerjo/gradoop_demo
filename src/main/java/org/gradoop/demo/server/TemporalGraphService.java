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

import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.api.java.io.LocalCollectionOutputFormat;
import org.apache.flink.api.java.tuple.Tuple3;
import org.codehaus.jettison.json.JSONException;
import org.gradoop.common.model.impl.properties.Property;
import org.gradoop.demo.server.functions.LabelGroupReducer;
import org.gradoop.demo.server.functions.LabelMapper;
import org.gradoop.demo.server.functions.LabelReducer;
import org.gradoop.demo.server.functions.PropertyKeyMapper;
import org.gradoop.demo.server.gen.io.swagger.model.*;
import org.gradoop.demo.server.oldApi.RequestHandler;
import org.gradoop.flink.model.api.functions.AggregateFunction;
import org.gradoop.flink.model.api.functions.KeyFunction;
import org.gradoop.flink.model.impl.operators.keyedgrouping.KeyedGrouping;
import org.gradoop.temporal.io.impl.csv.TemporalCSVDataSource;
import org.gradoop.temporal.model.api.functions.TemporalPredicate;
import org.gradoop.temporal.model.impl.TemporalGraph;
import org.gradoop.temporal.model.impl.functions.predicates.*;
import org.gradoop.temporal.model.impl.pojo.TemporalEdge;
import org.gradoop.temporal.model.impl.pojo.TemporalGraphHead;
import org.gradoop.temporal.model.impl.pojo.TemporalVertex;
import org.gradoop.temporal.util.TemporalGradoopConfig;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Main Service implementing the business logic of the Temporal Gradoop API Functionality
 */
public class TemporalGraphService {


    /**
     * Execution Environment for distributed tasks.
     */
    private static final ExecutionEnvironment ENV = ExecutionEnvironment.createLocalEnvironment();

    /**
     * Gradoop Config for temporal Graphs.
     */
    private TemporalGradoopConfig config = TemporalGradoopConfig.createConfig(ENV);


    /**
     * Returns information which graphs are currently stored on disk
     *
     * @return List of db Names
     */
    public ArrayList<String> getGraphs() {
        ArrayList<String> result = new ArrayList<>();
        result.add("Citibike1");
        result.add("Citibike100");
        return result;
    }

    /**
     * Returns complete Graph
     *
     * @param dbName
     * @return
     */
    public Graph getGraph(String dbName) throws Exception{
        TemporalGraph graph = IOService.readGraph(dbName, config);
        return executeGraphRequest(graph);
    }

    /**
     * Check if buffered file exists, if not create one.
     * If Reading fails for some reason try computing the file again as a workaround.
     *
     * @param databaseName
     * @return properties and labels of the graph with the given name.
     * @throws Exception
     */
    public KeysAndLabels getKeysAndLabels(String databaseName) throws Exception {
        if (IOService.metaFileExists(databaseName)) {
            try{
                return IOService.readKeysAndLabelsFromDisk(databaseName);
            }
            catch(Exception ex){
                return computeKeysAndLabels(databaseName);
            }
        } else{
            return computeKeysAndLabels(databaseName);
        }
    }

    /**
     * Method which provides meta Information about the timespan in which
     *
     * @param dbName
     * @return
     */
    public TimeSpan getTimeSpan(String dbName, TimeDimension timeDim) throws Exception{
        //TODO: Implement Business Logic
        throw new Exception();
    }
    /**
     * Gradoop Difference Operator for Temporal Graphs.
     *
     * @param differenceRequest
     * @return Graph Object for API
     * @throws Exception bad input values, or internal server error when processing the request (Could be dispatched further)
     */
    public Graph difference(DifferenceRequest differenceRequest) throws Exception {

        //Read Graph
        String databaseName = differenceRequest.getDbName();
        TemporalGraph graph = IOService.readGraph(databaseName,config);

        //Create Temporal Predicates from the Request
        TemporalPredicate from = TransformationUtil.convertTemporalPredicate(differenceRequest.getFrom());
        TemporalPredicate to = TransformationUtil.convertTemporalPredicate(differenceRequest.getTo());
        //Convert Time Dimension for difference operator to consume
        org.gradoop.temporal.model.api.TimeDimension timeDimension = TransformationUtil.transformTimeDim(differenceRequest.getTimeDim());
        //Define difference Operation
        TemporalGraph diff = graph.diff(from, to, timeDimension);
        //Execute Request and return resulting graph
        return this.executeGraphRequest(diff);
    }

    /**
     * Gradoop Snapshot Operator
     *
     * @param snapshotRequest
     * @return Graph Object for API
     * @throws Exception bad input values, or internal server error when processing the request (Could be dispatched further)
     */
    public Graph snapshot(SnapshotRequest snapshotRequest) throws Exception {
        //Read Graph
        String databaseName = snapshotRequest.getDbName();
        TemporalGraph graph = IOService.readGraph(databaseName,config);
        //Convert TimeStamp Object of the request to Gradoop TemporalPredicate
        TemporalPredicate timeStamp = TransformationUtil.convertTemporalPredicate(snapshotRequest.getTimeStamp());
        //Convert Time Dimension for snapshot operator to consume
        org.gradoop.temporal.model.api.TimeDimension timeDimension = TransformationUtil.transformTimeDim(snapshotRequest.getTimeDim());
        //Define Snapshot Operation
        TemporalGraph snapshot = graph.snapshot(timeStamp, timeDimension);
        //Execute Operation and return resulting Graph
        return this.executeGraphRequest(snapshot);
    }

    /**
     * Gradoop Grouping Operator Implementation
     *
     * @param groupingRequest
     * @return Graph Object for API
     * @throws Exception bad input values, or internal server error when processing the request (Could be dispatched further)
     */
    public Graph grouping(GroupingRequest groupingRequest) throws Exception {
        //load the database
        String databaseName = groupingRequest.getDbName();
        TemporalGraph graph = IOService.readGraph(databaseName,config);

        List<KeyFunction<TemporalVertex, ?>> vertexKeys = TransformationUtil.transformVertexGroupingKeys(groupingRequest.getVertexKeys());
        List<AggregateFunction> vertexAggregation = TransformationUtil.transformAggregationFunctions(groupingRequest.getVertexAggrFuncs());
        List<KeyFunction<TemporalEdge, ?>> edgeKeys = TransformationUtil.transformEdgeGroupingKeys(groupingRequest.getEdgeKeys());
        List<AggregateFunction> edgeAggregation = TransformationUtil.transformAggregationFunctions(groupingRequest.getEdgeAggrFuncs());

        //Define Keyed Grouping Request
        graph = graph.callForGraph(new KeyedGrouping<>(
                // Vertex grouping keys
                vertexKeys,
                // Vertex aggregation functions
                vertexAggregation,
                // Edge grouping keys
                edgeKeys,
                // Edge aggregation functions
                edgeAggregation));

        // Execute Request and return resulting graph
        return executeGraphRequest(graph);
    }

    /**
     * -------------------------------------- Helper Functions -------------------------------------------
     **/


    /**
     * Compute property keys and labels and write them to Disk
     *
     * @param databaseName name of the database
     * @return KeysAndLabels object containing property keys and labels
     * @throws Exception if collection of Keys And Labels fails.
     */
    private KeysAndLabels computeKeysAndLabels(String databaseName) throws Exception{
        //Read Graph
        TemporalGraph graph = IOService.readGraph(databaseName,config);
        //Compute Graphs Properties and labels for edges and vertices
        KeysAndLabels keysAndLabels = new KeysAndLabels();
        keysAndLabels.setVertexKeys(getVertexKeys(graph));
        keysAndLabels.setVertexLabels(getVertexLabels(graph));
        keysAndLabels.setEdgeLabels(getEdgeLabels(graph));
        keysAndLabels.setEdgeKeys(getEdgeKeys(graph));
        //write Properties and labels to disk
        IOService.writeKeysAndLabelsToDisk(keysAndLabels, databaseName);
        return keysAndLabels;
    }




    /**
     * Takes any given graph and creates a JSONArray containing the vertex property keys and a
     * boolean,
     * specifying it the property has a numerical type.
     *
     * @param graph input graph
     * @return JSON array with property keys and boolean, that is true if the property type is
     * numercial
     * @throws Exception if collecting the distributed data fails
     */
    private List<KeysAndLabelsVertexKeys> getVertexKeys(TemporalGraph graph) throws Exception {
        List<Tuple3<Set<String>, String, Boolean>> vertexKeys = graph.getVertices()
                .flatMap(new PropertyKeyMapper<>())
                .groupBy(1)
                .reduceGroup(new LabelGroupReducer())
                .collect();
        return buildTransferObjectFromVertexKeys(vertexKeys);
    }

    /**
     * Takes any given graph and creates a JSONArray containing the edge property keys and a boolean,
     * specifying it the property has a numerical type.
     *
     * @param graph input graph
     * @return JSON array with property keys and boolean, that is true if the property type is
     * numercial
     * @throws Exception if collecting the distributed data fails
     */
    private List<KeysAndLabelsEdgeKeys> getEdgeKeys(TemporalGraph graph) throws Exception {
        List<Tuple3<Set<String>, String, Boolean>> edgeKeys = graph.getEdges()
                .flatMap(new PropertyKeyMapper<>())
                .groupBy(1)
                .reduceGroup(new LabelGroupReducer())
                .collect();
        return buildTransferObjectFromEdgeKeys(edgeKeys);
    }

    /**
     * Convenience methods.
     * Takes a set of tuples of property keys and booleans, specifying if the property is numerical,
     * and creates a JSON array containing the same data.
     * <p>
     * Two Methods for Vertex and Edge Keys respectively
     *
     * @param keys set of tuples of property keys and booleans, that are true if the property type
     *             is numerical
     * @return JSONArray containing the same data as the input
     * @throws JSONException if the construction of the JSON fails
     */
    private List<KeysAndLabelsVertexKeys> buildTransferObjectFromVertexKeys(List<Tuple3<Set<String>, String, Boolean>> keys) {
        List<KeysAndLabelsVertexKeys> vertexKeys = new ArrayList<>();
        for (Tuple3<Set<String>, String, Boolean> key : keys) {
            KeysAndLabelsVertexKeys currKey = new KeysAndLabelsVertexKeys();
            currKey.setLabels(new ArrayList<>(key.f0));
            currKey.setName(key.f1);
            currKey.setNumerical(key.f2);
            vertexKeys.add(currKey);
        }
        return vertexKeys;
    }

    private List<KeysAndLabelsEdgeKeys> buildTransferObjectFromEdgeKeys(List<Tuple3<Set<String>, String, Boolean>> keys) {
        List<KeysAndLabelsEdgeKeys> edgeKeys = new ArrayList<>();
        for (Tuple3<Set<String>, String, Boolean> key : keys) {
            KeysAndLabelsEdgeKeys currKey = new KeysAndLabelsEdgeKeys();
            currKey.setLabels(new ArrayList<>(key.f0));
            currKey.setName(key.f1);
            currKey.setNumerical(key.f2);
            edgeKeys.add(currKey);
        }
        return edgeKeys;
    }

    /**
     * Compute the labels of the vertices.
     *
     * @param graph logical graph
     * @return List<String> containing the vertex labels
     * @throws Exception if the computation fails
     */
    private List<String> getVertexLabels(TemporalGraph graph) throws Exception {
        List<Set<String>> vertexLabels = graph.getVertices()
                .map(new LabelMapper<>())
                .reduce(new LabelReducer())
                .collect();
        return new ArrayList<>(vertexLabels.get(0));
    }

    /**
     * Compute the labels of the edges.
     *
     * @param graph logical graph
     * @return List<String> containing the edge labels
     * @throws Exception if the computation fails
     */
    private List<String> getEdgeLabels(TemporalGraph graph) throws Exception {
        List<Set<String>> edgeLabels = graph.getEdges()
                .map(new LabelMapper<>())
                .reduce(new LabelReducer())
                .collect();
        return new ArrayList<>(edgeLabels.get(0));
    }

    /***
     * Execute request on the environment and return Graph
     *
     * @param graph
     * @return
     * @throws Exception Exception if distributed operation fails, or Graph Object is not created correctly.
     */
    private Graph executeGraphRequest(TemporalGraph graph) throws Exception {
        List<TemporalGraphHead> resultHead = new ArrayList<>();
        List<TemporalVertex> resultVertices = new ArrayList<>();
        List<TemporalEdge> resultEdges = new ArrayList<>();

        graph.getGraphHead().output(new LocalCollectionOutputFormat<>(resultHead));
        graph.getVertices().output(new LocalCollectionOutputFormat<>(resultVertices));
        graph.getEdges().output(new LocalCollectionOutputFormat<>(resultEdges));

        return executeGraphRequest(resultHead, resultVertices, resultEdges);
    }

    private Graph executeGraphRequest(
            List<TemporalGraphHead> resultHead,
            List<TemporalVertex> resultVertices,
            List<TemporalEdge> resultEdges) throws Exception {
        ENV.execute();
        // build the response Graph from the collections
        return TransformationUtil.createGraphTransferObject(resultHead, resultVertices, resultEdges);
    }
}