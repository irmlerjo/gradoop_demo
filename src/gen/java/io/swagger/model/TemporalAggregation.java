package io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets TemporalAggregation
 */
public enum TemporalAggregation {
  
  AVERAGEDURATION("AverageDuration"),
  
  AVERAGEEDGEDURATION("AverageEdgeDuration"),
  
  AVERAGEVERTEXDURATION("AverageVertexDuration"),
  
  MAXDURATION("MaxDuration"),
  
  MAXEDGEDURATION("MaxEdgeDuration"),
  
  MAXEDGETIME("MaxEdgeTime"),
  
  MAXTIME("MaxTime"),
  
  MAXVERTEXDURATION("MaxVertexDuration"),
  
  MAXVERTEXTIME("MaxVertexTime"),
  
  MINDURATION("MinDuration"),
  
  MINEDGEDURATION("MinEdgeDuration"),
  
  MINEDGETIME("MinEdgeTime"),
  
  MINTIME("MinTime"),
  
  MINVERTEXDURATION("MinVertexDuration"),
  
  MINVERTEXTIME("MinVertexTime");

  private String value;

  TemporalAggregation(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static TemporalAggregation fromValue(String text) {
    for (TemporalAggregation b : TemporalAggregation.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


