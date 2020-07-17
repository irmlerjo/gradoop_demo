package io.swagger.model;

import io.swagger.model.Edge;
import io.swagger.model.Node;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class Graph   {
  
  private @Valid List<Edge> edges = new ArrayList<Edge>();
  private @Valid List<Node> nodes = new ArrayList<Node>();
  private @Valid String type = null;
  private @Valid Node graphs = null;

  /**
   **/
  public Graph edges(List<Edge> edges) {
    this.edges = edges;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("edges")
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

  
  @ApiModelProperty(value = "")
  @JsonProperty("nodes")
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

  
  @ApiModelProperty(example = "graph", value = "")
  @JsonProperty("type")
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

  
  @ApiModelProperty(value = "")
  @JsonProperty("graphs")
  public Node getGraphs() {
    return graphs;
  }
  public void setGraphs(Node graphs) {
    this.graphs = graphs;
  }


  @Override
  public boolean equals(java.lang.Object o) {
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
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

