package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class SnapshotRequest   {
  
  private @Valid TimeDimension timeDim = null;
  private @Valid TimeStamp timeStamp = null;
  private @Valid String dbName = null;

  /**
   **/
  public SnapshotRequest timeDim(TimeDimension timeDim) {
    this.timeDim = timeDim;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("timeDim")
  @NotNull
  public TimeDimension getTimeDim() {
    return timeDim;
  }
  public void setTimeDim(TimeDimension timeDim) {
    this.timeDim = timeDim;
  }

  /**
   **/
  public SnapshotRequest timeStamp(TimeStamp timeStamp) {
    this.timeStamp = timeStamp;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("timeStamp")
  @NotNull
  public TimeStamp getTimeStamp() {
    return timeStamp;
  }
  public void setTimeStamp(TimeStamp timeStamp) {
    this.timeStamp = timeStamp;
  }

  /**
   **/
  public SnapshotRequest dbName(String dbName) {
    this.dbName = dbName;
    return this;
  }

  
  @ApiModelProperty(example = "Citibike", required = true, value = "")
  @JsonProperty("dbName")
  @NotNull
  public String getDbName() {
    return dbName;
  }
  public void setDbName(String dbName) {
    this.dbName = dbName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
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
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

