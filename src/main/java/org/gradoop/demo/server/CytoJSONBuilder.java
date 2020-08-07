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

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.gradoop.common.model.impl.pojo.EPGMEdge;
import org.gradoop.common.model.impl.pojo.EPGMGraphHead;
import org.gradoop.common.model.impl.pojo.EPGMVertex;
import org.gradoop.common.model.impl.properties.Property;
import org.gradoop.demo.server.gen.io.swagger.model.Graph;
import org.gradoop.temporal.model.impl.pojo.TemporalEdge;
import org.gradoop.temporal.model.impl.pojo.TemporalGraphHead;
import org.gradoop.temporal.model.impl.pojo.TemporalVertex;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Converts a logical graph or a read JSON into a cytoscape-conform JSON.
 */

public class CytoJSONBuilder {
  /**
   * Key for vertex, edge and graph id.
   */
  private static final String IDENTIFIER = "id";
  /**
   * Key for the type of the returned JSON, either graph or collection.
   */
  private static final String TYPE = "type";
  /**
   * Key for meta Json object.
   */
  private static final String META = "meta";
  /**
   * Key for data Json object.
   */
  private static final String DATA = "data";
  /**
   * Key for vertex, edge and graph label.
   */
  private static final String LABEL = "label";
  /**
   * Key for graph identifiers at vertices and edges.
   */
  private static final String GRAPHS = "graphs";
  /**
   * Key for properties of graphs, vertices and edges.
   */
  private static final String PROPERTIES = "properties";
  /**
   * Key for vertex identifiers at graphs.
   */
  private static final String VERTICES = "nodes";
  /**
   * Key for edge identifiers at graphs.
   */
  private static final String EDGES = "edges";
  /**
   * Key for edge source vertex id.
   */
  private static final String EDGE_SOURCE = "source";
  /**
   * Key for edge target vertex id.
   */
  private static final String EDGE_TARGET = "target";

  /**
   * Takes a logical graph and converts it into a cytoscape-conform JSON.
   *
   * @param graphHeads the graph heads
   * @param vertices  the vertices
   * @param edges     the edges
   * @return a cytoscape-conform JSON
   * @throws JSONException if the creation of the JSON fails
   */
  public static String getJSONStringNonTemporal(List<EPGMGraphHead> graphHeads, List<EPGMVertex> vertices, List<EPGMEdge> edges)
    throws JSONException {

    JSONObject returnedJSON = new JSONObject();

    returnedJSON.put(TYPE, "graph");

    List<JSONObject> graphObjects = graphHeads.stream().map(graphHead -> {
      try {
        JSONObject graphObject = new JSONObject();

        JSONObject graphProperties = new JSONObject();
        graphObject.put(IDENTIFIER, graphHead.getId());
        graphObject.put(LABEL, graphHead.getLabel());
        if (graphHead.getProperties() != null) {
          for (Property prop : graphHead.getProperties()) {
            graphProperties.put(prop.getKey(), prop.getValue());
          }
        }
        return graphObject.put(PROPERTIES, graphProperties);
      } catch (JSONException e) {
        throw new RuntimeException("Foobar");
      }
    }).collect(Collectors.toList());

    returnedJSON.put(GRAPHS, graphObjects);

    JSONArray vertexArray = new JSONArray();
    for (EPGMVertex vertex : vertices) {
      JSONObject vertexObject = new JSONObject();
      JSONObject vertexData = new JSONObject();

      vertexData.put(IDENTIFIER, vertex.getId());
      vertexData.put(LABEL, vertex.getLabel());
      JSONObject vertexProperties = new JSONObject();
      if (vertex.getProperties() != null) {
        for (Property prop : vertex.getProperties()) {
          vertexProperties.put(prop.getKey(), prop.getValue());
        }
      }
      vertexData.put(PROPERTIES, vertexProperties);
      vertexObject.put(DATA, vertexData);
      vertexArray.put(vertexObject);
    }
    returnedJSON.put(VERTICES, vertexArray);

    JSONArray edgeArray = new JSONArray();
    for (EPGMEdge edge : edges) {
      JSONObject edgeObject = new JSONObject();
      JSONObject edgeData = new JSONObject();
      edgeData.put(EDGE_SOURCE, edge.getSourceId());
      edgeData.put(EDGE_TARGET, edge.getTargetId());
      edgeData.put(IDENTIFIER, edge.getId());
      edgeData.put(LABEL, edge.getLabel());
      JSONObject edgeProperties = new JSONObject();
      if (edge.getProperties() != null) {
        for (Property prop : edge.getProperties()) {
          edgeProperties.put(prop.getKey(), prop.getValue());
        }
      }
      edgeData.put(PROPERTIES, edgeProperties);
      edgeObject.put(DATA, edgeData);
      edgeArray.put(edgeObject);
    }


    returnedJSON.put(EDGES, edgeArray);

    return returnedJSON.toString();
  }

  /**
   * Takes a JSON containing a logical graph and converts it into a cytoscape-conform JSON.
   *
   * @param graph    graph JSON object
   * @param vertices vertices JSON array
   * @param edges    edges JSON array
   * @return cytoscape-conform JSON
   * @throws JSONException if JSON creation fails
   */
  static String getJSONString(JSONObject graph, JSONArray vertices, JSONArray edges) throws
    JSONException {

    JSONObject returnedJSON = new JSONObject();

    returnedJSON.put(TYPE, "graph");


    JSONObject graphObject = new JSONObject();
    graphObject.put(IDENTIFIER, graph.getString("id"));
    graphObject.put(LABEL, graph.getJSONObject("meta").getString("label"));

    graphObject.put(PROPERTIES, graph.getJSONObject("data"));

    JSONArray graphArray = new JSONArray();
    graphArray.put(graphObject);

    returnedJSON.put(GRAPHS, graphArray);

    JSONArray vertexArray = new JSONArray();
    for (int i = 0; i < vertices.length(); i++) {
      JSONObject vertex = vertices.getJSONObject(i);

      JSONObject vertexData = new JSONObject();
      vertexData.put(IDENTIFIER, vertex.getString("id"));
      vertexData.put(LABEL, vertex.getJSONObject("meta").getString("label"));

      vertexData.put(PROPERTIES, vertex.getJSONObject("data"));

      JSONObject vertexObject = new JSONObject();
      vertexObject.put(DATA, vertexData);

      vertexArray.put(vertexObject);
    }
    returnedJSON.put(VERTICES, vertexArray);

    JSONArray edgeArray = new JSONArray();
    for (int i = 0; i < edges.length(); i++) {
      JSONObject edge = edges.getJSONObject(i);

      JSONObject edgeData = new JSONObject();
      edgeData.put(EDGE_SOURCE, edge.getString("source"));
      edgeData.put(EDGE_TARGET, edge.getString("target"));
      edgeData.put(IDENTIFIER, edge.getString("id"));
      edgeData.put(LABEL, edge.getJSONObject("meta").getString("label"));

      edgeData.put(PROPERTIES, edge.getJSONObject("data"));

      JSONObject edgeObject = new JSONObject();
      edgeObject.put(DATA, edgeData);

      edgeArray.put(edgeObject);
    }
    returnedJSON.put(EDGES, edgeArray);
    return returnedJSON.toString();
  }

  /**
   * Takes a Temporal graph and converts it into a cytoscape-conform JSON.
   *
   * @param graphHeads the graph heads
   * @param vertices  the vertices
   * @param edges     the edges
   * @return a cytoscape-conform JSON
   * @throws JSONException if the creation of the JSON fails
   */
  static String getJSONString(List<TemporalGraphHead> graphHeads, List<TemporalVertex> vertices, List<TemporalEdge> edges)
          throws JSONException {

    JSONObject returnedJSON = new JSONObject();

    returnedJSON.put(TYPE, "graph");

    List<JSONObject> graphObjects = graphHeads.stream().map(graphHead -> {
      try {
        JSONObject graphObject = new JSONObject();

        JSONObject graphProperties = new JSONObject();
        graphObject.put(IDENTIFIER, graphHead.getId());
        graphObject.put(LABEL, graphHead.getLabel());
        if (graphHead.getProperties() != null) {
          for (Property prop : graphHead.getProperties()) {
            graphProperties.put(prop.getKey(), prop.getValue());
          }
        }
        return graphObject.put(PROPERTIES, graphProperties);
      } catch (JSONException e) {
        throw new RuntimeException("Foobar");
      }
    }).collect(Collectors.toList());

    returnedJSON.put(GRAPHS, graphObjects);

    JSONArray vertexArray = new JSONArray();
    for (TemporalVertex vertex : vertices) {
      JSONObject vertexObject = new JSONObject();
      JSONObject vertexData = new JSONObject();

      vertexData.put(IDENTIFIER, vertex.getId());
      vertexData.put(LABEL, vertex.getLabel());
      JSONArray vertexProperties = new JSONArray();
      if (vertex.getProperties() != null) {
        for (Property prop : vertex.getProperties()) {
          JSONObject singleProperty = new JSONObject();
          singleProperty.put("key", prop.getKey());
          singleProperty.put("value", prop.getValue());
          vertexProperties.put(singleProperty);
        }
      }
      vertexData.put(PROPERTIES, vertexProperties);
      vertexObject.put(DATA, vertexData);
      vertexArray.put(vertexObject);
    }
    returnedJSON.put(VERTICES, vertexArray);

    JSONArray edgeArray = new JSONArray();
    for (TemporalEdge edge : edges) {
      JSONObject edgeObject = new JSONObject();
      JSONObject edgeData = new JSONObject();
      edgeData.put(EDGE_SOURCE, edge.getSourceId());
      edgeData.put(EDGE_TARGET, edge.getTargetId());
      edgeData.put(IDENTIFIER, edge.getId());
      edgeData.put(LABEL, edge.getLabel());
      JSONArray edgeProperties = new JSONArray();
      if (edge.getProperties() != null) {
        for (Property prop : edge.getProperties()) {
          JSONObject singleProperty = new JSONObject();
          singleProperty.put("key", prop.getKey());
          singleProperty.put("value", prop.getValue());
          edgeProperties.put(singleProperty);
        }
      }
      edgeData.put(PROPERTIES, edgeProperties);
      edgeObject.put(DATA, edgeData);
      edgeArray.put(edgeObject);
    }


    returnedJSON.put(EDGES, edgeArray);


    //TODO: Effizient Json umwandeln. (Stack Problem bei großen Graphen)
    return returnedJSON.toString();
  }
}
