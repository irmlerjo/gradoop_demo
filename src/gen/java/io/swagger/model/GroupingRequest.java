package io.swagger.model;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class GroupingRequest   {
  
  private @Valid String dbName = null;
  private @Valid List<String> vertexKeys = new ArrayList<String>();

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
  public GroupingRequest vertexKeys(List<String> vertexKeys) {
    this.vertexKeys = vertexKeys;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("vertexKeys")
  @NotNull
  public List<String> getVertexKeys() {
    return vertexKeys;
  }
  public void setVertexKeys(List<String> vertexKeys) {
    this.vertexKeys = vertexKeys;
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
        Objects.equals(vertexKeys, groupingRequest.vertexKeys);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dbName, vertexKeys);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupingRequest {\n");
    
    sb.append("    dbName: ").append(toIndentedString(dbName)).append("\n");
    sb.append("    vertexKeys: ").append(toIndentedString(vertexKeys)).append("\n");
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

