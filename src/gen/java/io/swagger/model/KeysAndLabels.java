package io.swagger.model;

import io.swagger.model.KeysAndLabelsEdgeKeys;
import io.swagger.model.KeysAndLabelsVertexKeys;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class KeysAndLabels   {
  
  private @Valid List<KeysAndLabelsVertexKeys> vertexKeys = new ArrayList<KeysAndLabelsVertexKeys>();
  private @Valid List<KeysAndLabelsEdgeKeys> edgeKeys = new ArrayList<KeysAndLabelsEdgeKeys>();
  private @Valid List<String> vertexLabels = new ArrayList<String>();
  private @Valid List<String> edgeLabels = new ArrayList<String>();

  /**
   **/
  public KeysAndLabels vertexKeys(List<KeysAndLabelsVertexKeys> vertexKeys) {
    this.vertexKeys = vertexKeys;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("vertexKeys")
  public List<KeysAndLabelsVertexKeys> getVertexKeys() {
    return vertexKeys;
  }
  public void setVertexKeys(List<KeysAndLabelsVertexKeys> vertexKeys) {
    this.vertexKeys = vertexKeys;
  }

  /**
   **/
  public KeysAndLabels edgeKeys(List<KeysAndLabelsEdgeKeys> edgeKeys) {
    this.edgeKeys = edgeKeys;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("edgeKeys")
  public List<KeysAndLabelsEdgeKeys> getEdgeKeys() {
    return edgeKeys;
  }
  public void setEdgeKeys(List<KeysAndLabelsEdgeKeys> edgeKeys) {
    this.edgeKeys = edgeKeys;
  }

  /**
   **/
  public KeysAndLabels vertexLabels(List<String> vertexLabels) {
    this.vertexLabels = vertexLabels;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("vertexLabels")
  public List<String> getVertexLabels() {
    return vertexLabels;
  }
  public void setVertexLabels(List<String> vertexLabels) {
    this.vertexLabels = vertexLabels;
  }

  /**
   **/
  public KeysAndLabels edgeLabels(List<String> edgeLabels) {
    this.edgeLabels = edgeLabels;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("edgeLabels")
  public List<String> getEdgeLabels() {
    return edgeLabels;
  }
  public void setEdgeLabels(List<String> edgeLabels) {
    this.edgeLabels = edgeLabels;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KeysAndLabels keysAndLabels = (KeysAndLabels) o;
    return Objects.equals(vertexKeys, keysAndLabels.vertexKeys) &&
        Objects.equals(edgeKeys, keysAndLabels.edgeKeys) &&
        Objects.equals(vertexLabels, keysAndLabels.vertexLabels) &&
        Objects.equals(edgeLabels, keysAndLabels.edgeLabels);
  }

  @Override
  public int hashCode() {
    return Objects.hash(vertexKeys, edgeKeys, vertexLabels, edgeLabels);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KeysAndLabels {\n");
    
    sb.append("    vertexKeys: ").append(toIndentedString(vertexKeys)).append("\n");
    sb.append("    edgeKeys: ").append(toIndentedString(edgeKeys)).append("\n");
    sb.append("    vertexLabels: ").append(toIndentedString(vertexLabels)).append("\n");
    sb.append("    edgeLabels: ").append(toIndentedString(edgeLabels)).append("\n");
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

