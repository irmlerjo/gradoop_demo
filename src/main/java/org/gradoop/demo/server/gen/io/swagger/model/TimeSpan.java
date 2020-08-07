package org.gradoop.demo.server.gen.io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;

import java.util.Date;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class TimeSpan   {

    private @Valid Date start = null;
    private @Valid Date end = null;

    /**
     **/
    public TimeSpan start(Date start) {
        this.start = start;
        return this;
    }


    @ApiModelProperty(value = "")
    @JsonProperty("start")
    @NotNull
    public Date getStart() {
        return start;
    }
    public void setStart(Date start) {
        this.start = start;
    }

    /**
     **/
    public TimeSpan end(Date end) {
        this.end = end;
        return this;
    }


    @ApiModelProperty(required = true, value = "")
    @JsonProperty("end")
    @NotNull
    public Date getEnd() {
        return end;
    }
    public void setEnd(Date end) {
        this.end = end;
    }


    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeSpan timeSpan = (TimeSpan) o;
        return Objects.equals(start, timeSpan.start) &&
                Objects.equals(end, timeSpan.end);
    }

    @Override
    public int hashCode() {
        return Objects.hash(start, end);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TimeSpan {\n");

        sb.append("    start: ").append(toIndentedString(start)).append("\n");
        sb.append("    end: ").append(toIndentedString(end)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}

