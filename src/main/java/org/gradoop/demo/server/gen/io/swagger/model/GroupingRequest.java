package org.gradoop.demo.server.gen.io.swagger.model;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class GroupingRequest   {
  
  private @Valid String dbName = null;
  private @Valid List<GroupingKey> vertexKeys = new ArrayList<>();
  private @Valid List<GroupingKey> edgeKeys = new ArrayList<>();
  private @Valid List<AggregationKey> vertexAggrFuncs = new ArrayList<>();
  private @Valid List<AggregationKey> edgeAggrFuncs = new ArrayList<>();

  /**
   **/
  public GroupingRequest dbName(String dbName) {
    this.dbName = dbName;
    return this;
  }

  
  @ApiModelProperty(example = "Citibike", required = true, value = "")
  @JsonProperty("dbName")
  @NotNull
  public String getDbName() {
    return dbName;
  }
  public void setDbName(String dbName) {
    this.dbName = dbName;
  }

  /**
   **/
  public GroupingRequest vertexKeys(List<GroupingKey> vertexKeys) {
    this.vertexKeys = vertexKeys;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("vertexKeys")
  @NotNull
  public List<GroupingKey> getVertexKeys() {
    return vertexKeys;
  }
  public void setVertexKeys(List<GroupingKey> vertexKeys) {
    this.vertexKeys = vertexKeys;
  }

  /**
   **/
  public GroupingRequest edgeKeys(List<GroupingKey> edgeKeys) {
    this.edgeKeys = edgeKeys;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("edgeKeys")
  @NotNull
  public List<GroupingKey> getEdgeKeys() {
    return edgeKeys;
  }
  public void setEdgeKeys(List<GroupingKey> edgeKeys) {
    this.edgeKeys = edgeKeys;
  }

  /**
   **/
  public GroupingRequest vertexAggrFuncs(List<AggregationKey> vertexAggrFuncs) {
    this.vertexAggrFuncs = vertexAggrFuncs;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("vertexAggrFuncs")
  @NotNull
  public List<AggregationKey> getVertexAggrFuncs() {
    return vertexAggrFuncs;
  }
  public void setVertexAggrFuncs(List<AggregationKey> vertexAggrFuncs) {
    this.vertexAggrFuncs = vertexAggrFuncs;
  }

  /**
   **/
  public GroupingRequest edgeAggrFuncs(List<AggregationKey> edgeAggrFuncs) {
    this.edgeAggrFuncs = edgeAggrFuncs;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("edgeAggrFuncs")
  @NotNull
  public List<AggregationKey> getEdgeAggrFuncs() {
    return edgeAggrFuncs;
  }
  public void setEdgeAggrFuncs(List<AggregationKey> edgeAggrFuncs) {
    this.edgeAggrFuncs = edgeAggrFuncs;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupingRequest groupingRequest = (GroupingRequest) o;
    return Objects.equals(dbName, groupingRequest.dbName) &&
        Objects.equals(vertexKeys, groupingRequest.vertexKeys) &&
        Objects.equals(edgeKeys, groupingRequest.edgeKeys) &&
        Objects.equals(vertexAggrFuncs, groupingRequest.vertexAggrFuncs) &&
        Objects.equals(edgeAggrFuncs, groupingRequest.edgeAggrFuncs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dbName, vertexKeys, edgeKeys, vertexAggrFuncs, edgeAggrFuncs);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupingRequest {\n");
    
    sb.append("    dbName: ").append(toIndentedString(dbName)).append("\n");
    sb.append("    vertexKeys: ").append(toIndentedString(vertexKeys)).append("\n");
    sb.append("    edgeKeys: ").append(toIndentedString(edgeKeys)).append("\n");
    sb.append("    vertexAggrFuncs: ").append(toIndentedString(vertexAggrFuncs)).append("\n");
    sb.append("    edgeAggrFuncs: ").append(toIndentedString(edgeAggrFuncs)).append("\n");
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

