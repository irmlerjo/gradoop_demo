package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class DifferenceRequest   {
  
  private @Valid TimeStamp from = null;
  private @Valid TimeStamp to = null;
  private @Valid String dbName = null;
  private @Valid TimeDimension timeDim = null;

  /**
   **/
  public DifferenceRequest from(TimeStamp from) {
    this.from = from;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("from")
  @NotNull
  public TimeStamp getFrom() {
    return from;
  }
  public void setFrom(TimeStamp from) {
    this.from = from;
  }

  /**
   **/
  public DifferenceRequest to(TimeStamp to) {
    this.to = to;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("to")
  @NotNull
  public TimeStamp getTo() {
    return to;
  }
  public void setTo(TimeStamp to) {
    this.to = to;
  }

  /**
   **/
  public DifferenceRequest dbName(String dbName) {
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

  /**
   **/
  public DifferenceRequest timeDim(TimeDimension timeDim) {
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


  @Override
  public boolean equals(java.lang.Object o) {
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
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

