package org.gradoop.demo.server.pojo.model;

import org.codehaus.jackson.annotate.JsonProperty;

import java.util.Date;


import java.util.Objects;


public class TimeStamp   {

  @JsonProperty
  public TemporalPredicate predicate = null;
  @JsonProperty
  public Date startDate = null;
  @JsonProperty
  public Date endDate = null;


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeStamp timeStamp = (TimeStamp) o;
    return Objects.equals(predicate, timeStamp.predicate) &&
        Objects.equals(startDate, timeStamp.startDate) &&
        Objects.equals(endDate, timeStamp.endDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(predicate, startDate, endDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TimeStamp {\n");
    
    sb.append("    predicate: ").append(toIndentedString(predicate)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
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

