package org.gradoop.demo.server.pojo.model;


import org.codehaus.jackson.annotate.JsonCreator;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonValue;

import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Gets or Sets TimeDimension
 */
public enum TimeDimension {

  TRANSACTIONTIME("TransactionTime"),
  VALIDTIME("ValidTime");

  public String value;

  TimeDimension(String value) {
    this.value = value;
  }

  private static Map<String, TimeDimension> FORMAT_MAP = Stream
          .of(TimeDimension.values())
          .collect(Collectors.toMap(s -> s.value, Function.identity()));

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static TimeDimension fromValue(String text) {
    for (TimeDimension b : TimeDimension.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  @JsonCreator // This is the factory method and must be static
  public static TimeDimension fromString(String string) {
    return Optional
            .ofNullable(FORMAT_MAP.get(string))
            .orElseThrow(() -> new IllegalArgumentException(string));
  }
}


