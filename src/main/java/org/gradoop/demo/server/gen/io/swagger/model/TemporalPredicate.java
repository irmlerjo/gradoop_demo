package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets TemporalPredicate
 */
public enum TemporalPredicate {
  
  ALL("All"),
  
  ASOF("AsOf"),
  
  BETWEEN("Between"),
  
  CONTAINEDIN("ContainedIn"),
  
  CREATEDIN("CreatedIn"),
  
  DELETEDIN("DeletedIn"),
  
  FROMTO("FromTo"),
  
  OVERLAPS("Overlaps"),
  
  PRECEDES("Precedes"),
  
  SUCCEEDS("Succeeds"),
  
  VALIDDURING("ValidDuring");

  private String value;

  TemporalPredicate(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static TemporalPredicate fromValue(String text) {
    for (TemporalPredicate b : TemporalPredicate.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


