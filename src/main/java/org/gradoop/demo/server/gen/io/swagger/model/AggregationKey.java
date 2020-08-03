package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class AggregationKey   {
  
  private @Valid String name = null;
  private @Valid AggregationType aggregationType = null;
  private @Valid Boolean forEdges = null;
  private @Valid String property = null;
  private @Valid TimeDimension timeDim = null;
  private @Valid TimeField timeField = null;

  /**
   **/
  public AggregationKey name(String name) {
    this.name = name;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("name")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  /**
   **/
  public AggregationKey aggregationType(AggregationType aggregationType) {
    this.aggregationType = aggregationType;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("aggregationType")
  public AggregationType getAggregationType() {
    return aggregationType;
  }
  public void setAggregationType(AggregationType aggregationType) {
    this.aggregationType = aggregationType;
  }

  /**
   **/
  public AggregationKey forEdges(Boolean forEdges) {
    this.forEdges = forEdges;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("forEdges")
  public Boolean isForEdges() {
    return forEdges;
  }
  public void setForEdges(Boolean forEdges) {
    this.forEdges = forEdges;
  }

  /**
   **/
  public AggregationKey property(String property) {
    this.property = property;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("property")
  public String getProperty() {
    return property;
  }
  public void setProperty(String property) {
    this.property = property;
  }

  /**
   **/
  public AggregationKey timeDim(TimeDimension timeDim) {
    this.timeDim = timeDim;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("timeDim")
  public TimeDimension getTimeDim() {
    return timeDim;
  }
  public void setTimeDim(TimeDimension timeDim) {
    this.timeDim = timeDim;
  }

  /**
   **/
  public AggregationKey timeField(TimeField timeField) {
    this.timeField = timeField;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("timeField")
  public TimeField getTimeField() {
    return timeField;
  }
  public void setTimeField(TimeField timeField) {
    this.timeField = timeField;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AggregationKey aggregationKey = (AggregationKey) o;
    return Objects.equals(name, aggregationKey.name) &&
        Objects.equals(aggregationType, aggregationKey.aggregationType) &&
        Objects.equals(forEdges, aggregationKey.forEdges) &&
        Objects.equals(property, aggregationKey.property) &&
        Objects.equals(timeDim, aggregationKey.timeDim) &&
        Objects.equals(timeField, aggregationKey.timeField);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, aggregationType, forEdges, property, timeDim, timeField);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AggregationKey {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    aggregationType: ").append(toIndentedString(aggregationType)).append("\n");
    sb.append("    forEdges: ").append(toIndentedString(forEdges)).append("\n");
    sb.append("    property: ").append(toIndentedString(property)).append("\n");
    sb.append("    timeDim: ").append(toIndentedString(timeDim)).append("\n");
    sb.append("    timeField: ").append(toIndentedString(timeField)).append("\n");
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

