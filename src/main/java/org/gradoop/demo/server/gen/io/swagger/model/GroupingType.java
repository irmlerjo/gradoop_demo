package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets GroupingType
 */
public enum GroupingType {
  
  NOTHING("Nothing"),
  
  LABEL("Label"),
  
  PROPERTY("Property"),
  
  DURATION("Duration"),
  
  TIMEINTERVAL("TimeInterval"),
  
  TIMESTAMP("TimeStamp"),
  
  TIMESTAMPFIELD("TimeStampField");

  private String value;

  GroupingType(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static GroupingType fromValue(String text) {
    for (GroupingType b : GroupingType.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


