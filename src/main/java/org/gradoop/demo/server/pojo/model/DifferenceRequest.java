package org.gradoop.demo.server.pojo.model;

import org.codehaus.jackson.annotate.JsonProperty;

import java.util.Objects;



public class DifferenceRequest   {

  @JsonProperty("from")
  public TimeStamp from = null;
  @JsonProperty("to")
  public TimeStamp to = null;
  @JsonProperty("dbName")
  public String dbName = null;
  @JsonProperty("timeDim")
  public TimeDimension timeDim = null;


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DifferenceRequest differenceRequest = (DifferenceRequest) o;
    return Objects.equals(from, differenceRequest.from) &&
        Objects.equals(to, differenceRequest.to) &&
        Objects.equals(dbName, differenceRequest.dbName) &&
        Objects.equals(timeDim, differenceRequest.timeDim);
  }

  @Override
  public int hashCode() {
    return Objects.hash(from, to, dbName, timeDim);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DifferenceRequest {\n");
    
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    to: ").append(toIndentedString(to)).append("\n");
    sb.append("    dbName: ").append(toIndentedString(dbName)).append("\n");
    sb.append("    timeDim: ").append(toIndentedString(timeDim)).append("\n");
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

