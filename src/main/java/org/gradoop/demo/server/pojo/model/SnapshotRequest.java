package org.gradoop.demo.server.pojo.model;

import org.codehaus.jackson.annotate.JsonProperty;

import java.util.Objects;

public class SnapshotRequest   {

  @JsonProperty("timeDim")
  public TimeDimension timeDim = null;
  @JsonProperty("timeStamp")
  public TimeStamp timeStamp = null;
  @JsonProperty("dbName")
  public String dbName = null;

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SnapshotRequest snapshotRequest = (SnapshotRequest) o;
    return Objects.equals(timeDim, snapshotRequest.timeDim) &&
        Objects.equals(timeStamp, snapshotRequest.timeStamp) &&
        Objects.equals(dbName, snapshotRequest.dbName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(timeDim, timeStamp, dbName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SnapshotRequest {\n");
    
    sb.append("    timeDim: ").append(toIndentedString(timeDim)).append("\n");
    sb.append("    timeStamp: ").append(toIndentedString(timeStamp)).append("\n");
    sb.append("    dbName: ").append(toIndentedString(dbName)).append("\n");
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

