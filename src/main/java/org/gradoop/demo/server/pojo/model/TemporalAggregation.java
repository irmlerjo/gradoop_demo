package org.gradoop.demo.server.pojo.model;

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
  public String toString() {
    return String.valueOf(value);
  }

  public static TemporalAggregation fromValue(String text) {
    for (TemporalAggregation b : TemporalAggregation.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


