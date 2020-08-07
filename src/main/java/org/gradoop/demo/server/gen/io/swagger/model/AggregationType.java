package org.gradoop.demo.server.gen.io.swagger.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets AggregationType
 */
public enum AggregationType {
  
  AVERAGEDURATION("AverageDuration"),
  
  MAXDURATION("MaxDuration"),
  
  MAXTIME("MaxTime"),
  
  MINDURATION("MinDuration"),
  
  MINTIME("MinTime"),
  
  COUNT("Count"),
  
  MAX("Max"),
  
  MIN("Min"),
  
  SUM("Sum"),
  
  NONE("None");

  private String value;

  AggregationType(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static AggregationType fromValue(String text) {
    for (AggregationType b : AggregationType.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


