package org.gradoop.demo.server.gen.io.swagger.model;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class NodeData   {
  
  private @Valid String id = null;
  private @Valid String label = null;
  private @Valid List<NodeDataProperties> properties = new ArrayList<NodeDataProperties>();

  /**
   **/
  public NodeData id(String id) {
    this.id = id;
    return this;
  }

  
  @ApiModelProperty(example = "5ea824c59e45472ee6faf174", value = "")
  @JsonProperty("id")
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }

  /**
   **/
  public NodeData label(String label) {
    this.label = label;
    return this;
  }

  
  @ApiModelProperty(example = "Station", value = "")
  @JsonProperty("label")
  public String getLabel() {
    return label;
  }
  public void setLabel(String label) {
    this.label = label;
  }

  /**
   **/
  public NodeData properties(List<NodeDataProperties> properties) {
    this.properties = properties;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("properties")
  public List<NodeDataProperties> getProperties() {
    return properties;
  }
  public void setProperties(List<NodeDataProperties> properties) {
    this.properties = properties;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NodeData nodeData = (NodeData) o;
    return Objects.equals(id, nodeData.id) &&
        Objects.equals(label, nodeData.label) &&
        Objects.equals(properties, nodeData.properties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, label, properties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NodeData {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    properties: ").append(toIndentedString(properties)).append("\n");
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

