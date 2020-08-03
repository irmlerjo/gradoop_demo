package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets TimeDimension
 */
public enum TimeDimension {
  
  TRANSACTIONTIME("TransactionTime"),
  
  VALIDTIME("ValidTime");

  private String value;

  TimeDimension(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static TimeDimension fromValue(String text) {
    for (TimeDimension b : TimeDimension.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


