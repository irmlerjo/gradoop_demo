package org.gradoop.demo.server.gen.io.swagger.model;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class EdgeData   {
  
  private @Valid String id = null;
  private @Valid String label = null;
  private @Valid List<EdgeDataProperties> properties = new ArrayList<EdgeDataProperties>();
  private @Valid String source = null;
  private @Valid String target = null;

  /**
   **/
  public EdgeData id(String id) {
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
  public EdgeData label(String label) {
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
  public EdgeData properties(List<EdgeDataProperties> properties) {
    this.properties = properties;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("properties")
  public List<EdgeDataProperties> getProperties() {
    return properties;
  }
  public void setProperties(List<EdgeDataProperties> properties) {
    this.properties = properties;
  }

  /**
   **/
  public EdgeData source(String source) {
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
  public EdgeData target(String target) {
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
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdgeData edgeData = (EdgeData) o;
    return Objects.equals(id, edgeData.id) &&
        Objects.equals(label, edgeData.label) &&
        Objects.equals(properties, edgeData.properties) &&
        Objects.equals(source, edgeData.source) &&
        Objects.equals(target, edgeData.target);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, label, properties, source, target);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdgeData {\n");
    
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
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

