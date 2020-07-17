package org.gradoop.demo.server.pojo.model;

import org.codehaus.jackson.annotate.JsonCreator;
import org.codehaus.jackson.annotate.JsonProperty;

import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

  private static Map<String, TemporalPredicate> FORMAT_MAP = Stream
          .of(TemporalPredicate.values())
          .collect(Collectors.toMap(s -> s.value, Function.identity()));

  private String value;

  TemporalPredicate(String value) {
    this.value = value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static TemporalPredicate fromValue(String text) {
    for (TemporalPredicate b : TemporalPredicate.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  @JsonCreator // This is the factory method and must be static
  public static TemporalPredicate fromString(String string) {
    return Optional
            .ofNullable(FORMAT_MAP.get(string))
            .orElseThrow(() -> new IllegalArgumentException(string));
  }
}


