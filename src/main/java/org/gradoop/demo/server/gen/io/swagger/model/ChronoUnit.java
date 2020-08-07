package org.gradoop.demo.server.gen.io.swagger.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets ChronoUnit
 */
public enum ChronoUnit {
  
  CENTURIES("CENTURIES"),
  
  DAYS("DAYS"),
  
  DECADES("DECADES"),
  
  ERAS("ERAS"),
  
  FOREVER("FOREVER"),
  
  HALFDAYS("HALFDAYS"),
  
  HOURS("HOURS"),
  
  MICROS("MICROS"),
  
  MILLENIA("MILLENIA"),
  
  MILLIS("MILLIS"),
  
  MINUTES("MINUTES"),
  
  MONTHS("MONTHS"),
  
  NANOS("NANOS"),
  
  SECONDS("SECONDS"),
  
  WEEKS("WEEKS"),
  
  YEARS("YEARS");

  private String value;

  ChronoUnit(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static ChronoUnit fromValue(String text) {
    for (ChronoUnit b : ChronoUnit.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


