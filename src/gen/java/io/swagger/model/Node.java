package io.swagger.model;

import io.swagger.model.NodeProperties;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class Node   {
  
  private @Valid String id = null;
  private @Valid String label = null;
  private @Valid List<NodeProperties> properties = new ArrayList<NodeProperties>();

  /**
   **/
  public Node id(String id) {
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
  public Node label(String label) {
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
  public Node properties(List<NodeProperties> properties) {
    this.properties = properties;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("properties")
  public List<NodeProperties> getProperties() {
    return properties;
  }
  public void setProperties(List<NodeProperties> properties) {
    this.properties = properties;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Node node = (Node) o;
    return Objects.equals(id, node.id) &&
        Objects.equals(label, node.label) &&
        Objects.equals(properties, node.properties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, label, properties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Node {\n");
    
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
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

