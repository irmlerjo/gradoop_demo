package io.swagger.model;

import io.swagger.model.EdgeProperties;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class Edge   {
  
  private @Valid String id = null;
  private @Valid String label = null;
  private @Valid List<EdgeProperties> properties = new ArrayList<EdgeProperties>();
  private @Valid String source = null;
  private @Valid String target = null;

  /**
   **/
  public Edge id(String id) {
    this.id = id;
    return this;
  }

  
  @ApiModelProperty(example = "5ea825309e45472ee615cf21", value = "")
  @JsonProperty("id")
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }

  /**
   **/
  public Edge label(String label) {
    this.label = label;
    return this;
  }

  
  @ApiModelProperty(example = "Trip", value = "")
  @JsonProperty("label")
  public String getLabel() {
    return label;
  }
  public void setLabel(String label) {
    this.label = label;
  }

  /**
   **/
  public Edge properties(List<EdgeProperties> properties) {
    this.properties = properties;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("properties")
  public List<EdgeProperties> getProperties() {
    return properties;
  }
  public void setProperties(List<EdgeProperties> properties) {
    this.properties = properties;
  }

  /**
   **/
  public Edge source(String source) {
    this.source = source;
    return this;
  }

  
  @ApiModelProperty(example = "5ea825199e45472ee67f7b0d", value = "")
  @JsonProperty("source")
  public String getSource() {
    return source;
  }
  public void setSource(String source) {
    this.source = source;
  }

  /**
   **/
  public Edge target(String target) {
    this.target = target;
    return this;
  }

  
  @ApiModelProperty(example = "5ea824dc9e45472ee60dd51c", value = "")
  @JsonProperty("target")
  public String getTarget() {
    return target;
  }
  public void setTarget(String target) {
    this.target = target;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Edge edge = (Edge) o;
    return Objects.equals(id, edge.id) &&
        Objects.equals(label, edge.label) &&
        Objects.equals(properties, edge.properties) &&
        Objects.equals(source, edge.source) &&
        Objects.equals(target, edge.target);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, label, properties, source, target);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Edge {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    properties: ").append(toIndentedString(properties)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    target: ").append(toIndentedString(target)).append("\n");
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

