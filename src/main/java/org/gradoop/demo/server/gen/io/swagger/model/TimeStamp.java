package org.gradoop.demo.server.gen.io.swagger.model;

import java.util.Date;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class TimeStamp   {
  
  private @Valid TemporalPredicate predicate = null;
  private @Valid Date startDate = null;
  private @Valid Date endDate = null;

  /**
   **/
  public TimeStamp predicate(TemporalPredicate predicate) {
    this.predicate = predicate;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("predicate")
  @NotNull
  public TemporalPredicate getPredicate() {
    return predicate;
  }
  public void setPredicate(TemporalPredicate predicate) {
    this.predicate = predicate;
  }

  /**
   **/
  public TimeStamp startDate(Date startDate) {
    this.startDate = startDate;
    return this;
  }

  
  @ApiModelProperty(example = "2016-08-29T09:12:33.001Z", required = true, value = "")
  @JsonProperty("startDate")
  @NotNull
  public Date getStartDate() {
    return startDate;
  }
  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  /**
   **/
  public TimeStamp endDate(Date endDate) {
    this.endDate = endDate;
    return this;
  }

  
  @ApiModelProperty(example = "2017-07-21T17:32:28Z", value = "")
  @JsonProperty("endDate")
  public Date getEndDate() {
    return endDate;
  }
  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
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
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

