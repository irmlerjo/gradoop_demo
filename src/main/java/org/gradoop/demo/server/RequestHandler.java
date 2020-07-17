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

import org.apache.commons.lang.ArrayUtils;
import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.api.java.io.LocalCollectionOutputFormat;
import org.apache.flink.api.java.tuple.Tuple3;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.gradoop.common.model.api.entities.GraphHead;
import org.gradoop.common.model.impl.pojo.EPGMEdge;
import org.gradoop.common.model.impl.pojo.EPGMGraphHead;
import org.gradoop.common.model.impl.pojo.EPGMVertex;
import org.gradoop.demo.server.functions.AcceptNoneFilter;
import org.gradoop.demo.server.functions.LabelFilter;
import org.gradoop.demo.server.functions.LabelGroupReducer;
import org.gradoop.demo.server.functions.LabelMapper;
import org.gradoop.demo.server.functions.LabelReducer;
import org.gradoop.demo.server.functions.PropertyKeyMapper;
import org.gradoop.demo.server.pojo.GroupingRequest;
import org.gradoop.demo.server.pojo.model.*;
import org.gradoop.flink.model.impl.epgm.GraphCollection;
import org.gradoop.flink.model.impl.epgm.LogicalGraph;
import org.gradoop.flink.model.impl.operators.aggregation.functions.count.Count;
import org.gradoop.flink.model.impl.operators.aggregation.functions.max.MaxProperty;
import org.gradoop.flink.model.impl.operators.aggregation.functions.min.MinProperty;
import org.gradoop.flink.model.impl.operators.aggregation.functions.sum.SumProperty;
import org.gradoop.flink.model.impl.operators.grouping.Grouping;
import org.gradoop.flink.model.impl.operators.grouping.GroupingStrategy;
import org.gradoop.flink.model.impl.operators.matching.common.MatchStrategy;
import org.gradoop.flink.model.impl.operators.matching.common.statistics.GraphStatistics;
import org.gradoop.flink.model.impl.operators.matching.single.cypher.CypherPatternMatching;
import org.gradoop.flink.util.GradoopFlinkConfig;
import org.gradoop.temporal.io.impl.csv.TemporalCSVDataSource;
import org.gradoop.temporal.model.api.functions.TemporalPredicate;
import org.gradoop.temporal.model.impl.TemporalGraph;
import org.gradoop.temporal.model.impl.TemporalGraphCollection;
import org.gradoop.temporal.model.impl.functions.predicates.*;
import org.gradoop.temporal.model.impl.pojo.TemporalEdge;
import org.gradoop.temporal.model.impl.pojo.TemporalGraphHead;
import org.gradoop.temporal.model.impl.pojo.TemporalVertex;
import org.gradoop.temporal.util.TemporalGradoopConfig;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

/**
 * Handles REST requests to the server.
 */
@Path("")
public class RequestHandler {

  private final String META_FILENAME = "/metadata.json";

  private static final ExecutionEnvironment ENV = ExecutionEnvironment.createLocalEnvironment();
  private TemporalGradoopConfig config = TemporalGradoopConfig.createConfig(ENV);

  /**
   * Takes a database name via a POST request and returns the keys of all
   * vertex and edge properties, and a boolean value specifying if the property has a numerical
   * type. The return is a string in the JSON format, for easy usage in a JavaScript web page.
   *
   * @param databaseName name of the loaded database
   * @return  A JSON containing the vertices and edges property keys
   */
  @POST
  @Path("/keys/{databaseName}")
  @Produces("application/json;charset=utf-8")
  public Response getKeysAndLabels(@PathParam("databaseName") String databaseName) {
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
/*
  @POST
  @Path("/cypher")
  @Produces("application/x-www-form-urlencoded;charset=utf-8")
  public Response executeCypher(
          @FormParam("databaseName") String databaseName,
          @FormParam("query") String query,
          @DefaultValue("false") @FormParam("attacheData") boolean attacheData) {
    //load the database
    String path =  RequestHandler.class.getResource("/data/" + databaseName).getPath();

    TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);

    TemporalGraph graph = source.getTemporalGraph();

    // TODO load proper statistics
    GraphStatistics graphStatistics = new GraphStatistics(1, 1, 1, 1);
    GraphCollection res = graph.callForCollection(
      new CypherPatternMatching<>(query, attacheData, MatchStrategy.HOMOMORPHISM, MatchStrategy.ISOMORPHISM,
        graphStatistics));

    return createResponse(res);
  }*/

    @POST
    @Path("/difference")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    public Response difference(DifferenceRequest differenceRequest) {

      String databaseName = differenceRequest.dbName;

      String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();
      TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);
      TemporalGraph graph = source.getTemporalGraph();
      try {
        TemporalPredicate from = this.convertTemporalPredicate(differenceRequest.from);
        TemporalPredicate to = this.convertTemporalPredicate(differenceRequest.to);
        org.gradoop.temporal.model.api.TimeDimension timeDimension = this.convertTimeDimension(differenceRequest.timeDim);
        TemporalGraph diff = graph.diff(from, to, timeDimension);
        return this.createResponse(diff);
      } catch (Exception e) {
        e.printStackTrace();
        return Response.status(Response.Status.BAD_REQUEST).build();
      }
    }

  private org.gradoop.temporal.model.api.TimeDimension convertTimeDimension(TimeDimension timeDim) throws Exception {
      if(timeDim==TimeDimension.TRANSACTIONTIME){
        return org.gradoop.temporal.model.api.TimeDimension.TRANSACTION_TIME;
      }
      else if(timeDim==TimeDimension.VALIDTIME){
        return org.gradoop.temporal.model.api.TimeDimension.VALID_TIME;
      }
      else{
        throw new Exception("Not a valid Time Dimension");
      }
  }

  private TemporalPredicate convertTemporalPredicate(TimeStamp timeStamp) throws Exception {
      TemporalPredicate result;
      switch (timeStamp.predicate){
        case ASOF:
          result= new AsOf(timeStamp.startDate.toInstant().toEpochMilli());
          break;
        case BETWEEN:
          result = new Between(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case FROMTO:
          result = new FromTo(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case OVERLAPS:
          result= new Overlaps(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case PRECEDES:
          result= new Precedes(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case SUCCEEDS:
          result= new Succeeds(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case CREATEDIN:
          result= new CreatedIn(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case DELETEDIN:
          result= new DeletedIn(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case CONTAINEDIN:
          result = new ContainedIn(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        case ALL:
          result= new All();
          break;
        case VALIDDURING:
          result= new ValidDuring(timeStamp.startDate.toInstant().toEpochMilli(),timeStamp.endDate.toInstant().toEpochMilli());
          break;
        default:
          throw new Exception("Not a valid Predicate");
      }
      return result;
  }

  @POST
  @Path("/snapshot")
  @Consumes({ "application/json" })
  @Produces({ "application/json" })
  public Response snapshot(SnapshotRequest snapshotRequest) {



    String databaseName = snapshotRequest.dbName;

    String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();
    TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);
    TemporalGraph graph = source.getTemporalGraph();

    try {
      TemporalPredicate timeStamp = this.convertTemporalPredicate(snapshotRequest.timeStamp);
      org.gradoop.temporal.model.api.TimeDimension timeDimension = this.convertTimeDimension(snapshotRequest.timeDim);
      TemporalGraph snapshot = graph.snapshot(timeStamp,timeDimension);
      return this.createResponse(snapshot);
    } catch (Exception e) {
      e.printStackTrace();
      return Response.status(Response.Status.BAD_REQUEST).build();
    }
  }

  @GET
  @Produces({ "application/json" })
  public Response getGraphs() {
    ArrayList<String> result = new ArrayList<>();
    result.add("Citibike");
    result.add("Citibike1");
    result.add("Citibike10");
    result.add("Citibike100");
    return Response.ok().entity(result).build();
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

    LogicalGraph graph = source.getLogicalGraph();

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
  private JSONArray getVertexKeys(LogicalGraph graph) throws Exception {

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
  private JSONArray getEdgeKeys(LogicalGraph graph) throws Exception {

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
  private JSONArray getVertexLabels(LogicalGraph graph) throws Exception {
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
  private JSONArray getEdgeLabels(LogicalGraph graph ) throws Exception {
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

  /**
   * Get the complete graph in cytoscape-conform form.
   *
   * @param databaseName name of the database
   * @return Response containing the graph as a JSON, in cytoscape conform format.
   * @throws JSONException if JSON creation fails
   * @throws IOException if reading fails
   */

  @POST
  @Path("/graph/{databaseName}")
  @Produces("application/json;charset=utf-8")
  public Response getGraph(@PathParam("databaseName") String databaseName) throws Exception {

    String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();

    TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);

    TemporalGraph graph = source.getTemporalGraph();



    String json = CytoJSONBuilder.getJSONString(
      graph.getGraphHead().collect(),
      graph.getVertices().collect(),
      graph.getEdges().collect());

    return Response.ok(json).build();
  }



  /**
   * Takes a {@link GroupingRequest}, executes a grouping with the parameters it contains and
   * returns the results as a JSON.
   *
   * @param request GroupingRequest send to the server, containing the parameters for a
   *        {@link Grouping}.
   * @return a JSON containing the result of the executed Grouping, a graph
   */
  @POST
  @Path("/grouping")
  @Produces("application/json;charset=utf-8")
  public Response getData(GroupingRequest request) throws Exception {

    //load the database
    String databaseName = request.getDbName();

    String path = RequestHandler.class.getResource("/data/" + databaseName).getPath();

    TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);

    TemporalGraph graph = source.getTemporalGraph();

    //if no edges are requested, remove them as early as possible
    //else, apply the normal filters
    if(request.getFilterAllEdges()) {
      graph = graph.subgraph(new LabelFilter<>(request.getVertexFilters()),
              new AcceptNoneFilter<>());
    } else{
      graph = graph.subgraph(new LabelFilter<>(request.getVertexFilters()),
              new LabelFilter<>(request.getEdgeFilters()));
    }

    //construct the grouping with the parameters send by the request
    Grouping.GroupingBuilder builder = new Grouping.GroupingBuilder();
    int position;
    position = ArrayUtils.indexOf(request.getVertexKeys(), "label");
    if(position > -1) {
      builder.useVertexLabel(true);
      request.setVertexKeys((String[])ArrayUtils.remove(request.getVertexKeys(), position));
    }
    builder.addVertexGroupingKeys(Arrays.asList(request.getVertexKeys()));

    position = ArrayUtils.indexOf(request.getEdgeKeys(), "label");
    if(position > -1) {
      builder.useEdgeLabel(true);
      request.setEdgeKeys((String[])ArrayUtils.remove(request.getEdgeKeys(), position));
    }
    builder.addEdgeGroupingKeys(Arrays.asList(request.getEdgeKeys()));

    String[] vertexAggrFuncs = request.getVertexAggrFuncs();

    for(String vertexAggrFunc : vertexAggrFuncs) {
      String[] split = vertexAggrFunc.split(" ");
      switch (split[0]) {
      case "max":
        builder.addVertexAggregateFunction(new MaxProperty(split[1], "max " + split[1]));
        break;
      case "min":
        builder.addVertexAggregateFunction(new MinProperty(split[1], "min " + split[1]));
        break;
      case "sum":
        builder.addVertexAggregateFunction(new SumProperty(split[1], "sum " + split[1]));
        break;
      case "count":
        builder.addVertexAggregateFunction(new Count());
        break;
      }
    }

    String[] edgeAggrFuncs = request.getEdgeAggrFuncs();

    for(String edgeAggrFunc : edgeAggrFuncs) {
      String[] split = edgeAggrFunc.split(" ");
      switch (split[0]) {
      case "max":
        builder.addEdgeAggregateFunction(new MaxProperty(split[1], "max " + split[1]));
        break;
      case "min":
        builder.addEdgeAggregateFunction(new MinProperty(split[1], "min " + split[1]));
        break;
      case "sum":
        builder.addEdgeAggregateFunction(new SumProperty(split[1], "sum " + split[1]));
        break;
      case "count":
        builder.addEdgeAggregateFunction(new Count());
        break;
      }
    }

    // by default, we use the group reduce strategy
    builder.setStrategy(GroupingStrategy.GROUP_REDUCE);

    graph = graph.callForGraph(builder.build());

    // specify the output collections
    return createResponse(graph);
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
      String json = CytoJSONBuilder.getJSONString(resultHead, resultVertices, resultEdges);
      return Response.ok(json).build();

    } catch (Exception e) {
      e.printStackTrace();
      // if any exception is thrown, return an error to the client
      return Response.serverError().build();
    }
  }
}