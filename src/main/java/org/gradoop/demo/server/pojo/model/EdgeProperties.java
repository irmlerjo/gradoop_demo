package org.gradoop.demo.server.pojo.model;



import java.util.Objects;


public class EdgeProperties   {
  
  private String key = null;
  private String value = null;

  /**
   **/
  public EdgeProperties key(String key) {
    this.key = key;
    return this;
  }

  
  public String getKey() {
    return key;
  }
  public void setKey(String key) {
    this.key = key;
  }

  /**
   **/
  public EdgeProperties value(String value) {
    this.value = value;
    return this;
  }

  
  public String getValue() {
    return value;
  }
  public void setValue(String value) {
    this.value = value;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdgeProperties edgeProperties = (EdgeProperties) o;
    return Objects.equals(key, edgeProperties.key) &&
        Objects.equals(value, edgeProperties.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(key, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdgeProperties {\n");
    
    sb.append("    key: ").append(toIndentedString(key)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

