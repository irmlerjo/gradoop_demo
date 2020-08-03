package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class GroupingKey   {
  
  private @Valid GroupingType groupingType = null;
  private @Valid Boolean forVertex = null;
  private @Valid Boolean labelSpecific = null;
  private @Valid String label = null;
  private @Valid String property = null;
  private @Valid TimeDimension timeDim = null;
  private @Valid TimeField timeField = null;
  private @Valid ChronoUnit chronoUnit = null;
  private @Valid ChronoField chronoField = null;

  /**
   **/
  public GroupingKey groupingType(GroupingType groupingType) {
    this.groupingType = groupingType;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("groupingType")
  @NotNull
  public GroupingType getGroupingType() {
    return groupingType;
  }
  public void setGroupingType(GroupingType groupingType) {
    this.groupingType = groupingType;
  }

  /**
   **/
  public GroupingKey forVertex(Boolean forVertex) {
    this.forVertex = forVertex;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("forVertex")
  @NotNull
  public Boolean isForVertex() {
    return forVertex;
  }
  public void setForVertex(Boolean forVertex) {
    this.forVertex = forVertex;
  }

  /**
   **/
  public GroupingKey labelSpecific(Boolean labelSpecific) {
    this.labelSpecific = labelSpecific;
    return this;
  }

  
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("labelSpecific")
  @NotNull
  public Boolean isLabelSpecific() {
    return labelSpecific;
  }
  public void setLabelSpecific(Boolean labelSpecific) {
    this.labelSpecific = labelSpecific;
  }

  /**
   **/
  public GroupingKey label(String label) {
    this.label = label;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("label")
  public String getLabel() {
    return label;
  }
  public void setLabel(String label) {
    this.label = label;
  }

  /**
   **/
  public GroupingKey property(String property) {
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
  public GroupingKey timeDim(TimeDimension timeDim) {
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
  public GroupingKey timeField(TimeField timeField) {
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

  /**
   **/
  public GroupingKey chronoUnit(ChronoUnit chronoUnit) {
    this.chronoUnit = chronoUnit;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("chronoUnit")
  public ChronoUnit getChronoUnit() {
    return chronoUnit;
  }
  public void setChronoUnit(ChronoUnit chronoUnit) {
    this.chronoUnit = chronoUnit;
  }

  /**
   **/
  public GroupingKey chronoField(ChronoField chronoField) {
    this.chronoField = chronoField;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("chronoField")
  public ChronoField getChronoField() {
    return chronoField;
  }
  public void setChronoField(ChronoField chronoField) {
    this.chronoField = chronoField;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupingKey groupingKey = (GroupingKey) o;
    return Objects.equals(groupingType, groupingKey.groupingType) &&
        Objects.equals(forVertex, groupingKey.forVertex) &&
        Objects.equals(labelSpecific, groupingKey.labelSpecific) &&
        Objects.equals(label, groupingKey.label) &&
        Objects.equals(property, groupingKey.property) &&
        Objects.equals(timeDim, groupingKey.timeDim) &&
        Objects.equals(timeField, groupingKey.timeField) &&
        Objects.equals(chronoUnit, groupingKey.chronoUnit) &&
        Objects.equals(chronoField, groupingKey.chronoField);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groupingType, forVertex, labelSpecific, label, property, timeDim, timeField, chronoUnit, chronoField);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupingKey {\n");
    
    sb.append("    groupingType: ").append(toIndentedString(groupingType)).append("\n");
    sb.append("    forVertex: ").append(toIndentedString(forVertex)).append("\n");
    sb.append("    labelSpecific: ").append(toIndentedString(labelSpecific)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    property: ").append(toIndentedString(property)).append("\n");
    sb.append("    timeDim: ").append(toIndentedString(timeDim)).append("\n");
    sb.append("    timeField: ").append(toIndentedString(timeField)).append("\n");
    sb.append("    chronoUnit: ").append(toIndentedString(chronoUnit)).append("\n");
    sb.append("    chronoField: ").append(toIndentedString(chronoField)).append("\n");
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

