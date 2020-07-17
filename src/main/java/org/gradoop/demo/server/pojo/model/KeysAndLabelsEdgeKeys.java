package org.gradoop.demo.server.pojo.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class KeysAndLabelsEdgeKeys   {
  
  private List<String> labels = new ArrayList<String>();
  private String name = null;
  private Boolean numerical = null;

  /**
   **/
  public KeysAndLabelsEdgeKeys labels(List<String> labels) {
    this.labels = labels;
    return this;
  }

  
  public List<String> getLabels() {
    return labels;
  }
  public void setLabels(List<String> labels) {
    this.labels = labels;
  }

  /**
   **/
  public KeysAndLabelsEdgeKeys name(String name) {
    this.name = name;
    return this;
  }

  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  /**
   **/
  public KeysAndLabelsEdgeKeys numerical(Boolean numerical) {
    this.numerical = numerical;
    return this;
  }

  
  public Boolean isNumerical() {
    return numerical;
  }
  public void setNumerical(Boolean numerical) {
    this.numerical = numerical;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KeysAndLabelsEdgeKeys keysAndLabelsEdgeKeys = (KeysAndLabelsEdgeKeys) o;
    return Objects.equals(labels, keysAndLabelsEdgeKeys.labels) &&
        Objects.equals(name, keysAndLabelsEdgeKeys.name) &&
        Objects.equals(numerical, keysAndLabelsEdgeKeys.numerical);
  }

  @Override
  public int hashCode() {
    return Objects.hash(labels, name, numerical);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KeysAndLabelsEdgeKeys {\n");
    
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
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

