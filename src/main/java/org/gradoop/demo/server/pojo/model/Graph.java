package org.gradoop.demo.server.pojo.model;

import org.codehaus.jackson.annotate.JsonProperty;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import java.util.Objects;


public class Graph implements Serializable {

  @JsonProperty("edges")
  private List<Edge> edges = new ArrayList<Edge>();
  @JsonProperty("nodes")
  private List<Node> nodes = new ArrayList<Node>();
  @JsonProperty("type")
  private String type = null;
  @JsonProperty("graphs")
  private Node graphs = null;

  /**
   **/
  public Graph edges(List<Edge> edges) {
    this.edges = edges;
    return this;
  }


  public List<Edge> getEdges() {
    return edges;
  }
  public void setEdges(List<Edge> edges) {
    this.edges = edges;
  }

  /**
   **/
  public Graph nodes(List<Node> nodes) {
    this.nodes = nodes;
    return this;
  }


  public List<Node> getNodes() {
    return nodes;
  }
  public void setNodes(List<Node> nodes) {
    this.nodes = nodes;
  }

  /**
   **/
  public Graph type(String type) {
    this.type = type;
    return this;
  }


  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }

  /**
   **/
  public Graph graphs(Node graphs) {
    this.graphs = graphs;
    return this;
  }


  public Node getGraphs() {
    return graphs;
  }
  public void setGraphs(Node graphs) {
    this.graphs = graphs;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Graph graph = (Graph) o;
    return Objects.equals(edges, graph.edges) &&
        Objects.equals(nodes, graph.nodes) &&
        Objects.equals(type, graph.type) &&
        Objects.equals(graphs, graph.graphs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(edges, nodes, type, graphs);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Graph {\n");
    
    sb.append("    edges: ").append(toIndentedString(edges)).append("\n");
    sb.append("    nodes: ").append(toIndentedString(nodes)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    graphs: ").append(toIndentedString(graphs)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

