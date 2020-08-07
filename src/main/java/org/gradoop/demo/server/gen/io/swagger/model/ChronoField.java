package org.gradoop.demo.server.gen.io.swagger.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets ChronoField
 */
public enum ChronoField {
  
  NANOOFSECOND("NANOOFSECOND"),
  
  NANOOFDAY("NANOOFDAY"),
  
  MICROOFSECOND("MICROOFSECOND"),
  
  MICROOFDAY("MICROOFDAY"),
  
  MILLIOFSECOND("MILLIOFSECOND"),
  
  MILLIOFDAY("MILLIOFDAY"),
  
  SECONDOFMINUTE("SECONDOFMINUTE"),
  
  SECONDOFDAY("SECONDOFDAY"),
  
  MINUTEOFHOUR("MINUTEOFHOUR"),
  
  MINUTEOFDAY("MINUTEOFDAY"),
  
  HOUROFAMPM("HOUROFAMPM"),
  
  HOUROFDAY("HOUROFDAY"),
  
  CLOCKHOUROFDAY("CLOCKHOUROFDAY"),
  
  AMPMOFDAY("AMPMOFDAY"),
  
  DAYOFWEEK("DAYOFWEEK"),
  
  ALIGNEDDAYOFWEEKINMONTH("ALIGNEDDAYOFWEEKINMONTH"),
  
  ALIGNEDDAYOFWEEKINYEAR("ALIGNEDDAYOFWEEKINYEAR"),
  
  DAYOFMONTH("DAYOFMONTH"),
  
  DAYOFYEAR("DAYOFYEAR"),
  
  EPOCHDAY("EPOCHDAY"),
  
  ALIGNEDWEEKOFMONTH("ALIGNEDWEEKOFMONTH"),
  
  ALIGNEDWEEKOFYEAR("ALIGNEDWEEKOFYEAR"),
  
  MONTHOFYEAR("MONTHOFYEAR"),
  
  PROLEPTICMONTH("PROLEPTICMONTH"),
  
  YEAROFERA("YEAROFERA"),
  
  YEAR("YEAR"),
  
  ERA("ERA"),
  
  INTANTSECONDS("INTANTSECONDS"),
  
  OFFSETSECONDS("OFFSETSECONDS");

  private String value;

  ChronoField(String value) {
    this.value = value;
  }

  @Override
  @JsonValue
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static ChronoField fromValue(String text) {
    for (ChronoField b : ChronoField.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }
}


