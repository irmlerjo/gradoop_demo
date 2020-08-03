package org.gradoop.demo.server.gen.io.swagger.model;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class KeysAndLabelsVertexKeys   {
  
  private @Valid List<String> labels = new ArrayList<String>();
  private @Valid String name = null;
  private @Valid Boolean numerical = null;

  /**
   **/
  public KeysAndLabelsVertexKeys labels(List<String> labels) {
    this.labels = labels;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("labels")
  public List<String> getLabels() {
    return labels;
  }
  public void setLabels(List<String> labels) {
    this.labels = labels;
  }

  /**
   **/
  public KeysAndLabelsVertexKeys name(String name) {
    this.name = name;
    return this;
  }

  
  @ApiModelProperty(example = "regionId", value = "")
  @JsonProperty("name")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  /**
   **/
  public KeysAndLabelsVertexKeys numerical(Boolean numerical) {
    this.numerical = numerical;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("numerical")
  public Boolean isNumerical() {
    return numerical;
  }
  public void setNumerical(Boolean numerical) {
    this.numerical = numerical;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KeysAndLabelsVertexKeys keysAndLabelsVertexKeys = (KeysAndLabelsVertexKeys) o;
    return Objects.equals(labels, keysAndLabelsVertexKeys.labels) &&
        Objects.equals(name, keysAndLabelsVertexKeys.name) &&
        Objects.equals(numerical, keysAndLabelsVertexKeys.numerical);
  }

  @Override
  public int hashCode() {
    return Objects.hash(labels, name, numerical);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KeysAndLabelsVertexKeys {\n");
    
    sb.append("    labels: ").append(toIndentedString(labels)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    numerical: ").append(toIndentedString(numerical)).append("\n");
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

