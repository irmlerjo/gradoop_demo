package io.swagger.api;

import io.swagger.model.DifferenceRequest;
import io.swagger.model.Graph;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/difference")
@Api(description = "the difference API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen", date = "2020-07-14T15:22:29.296Z")
public class DifferenceApi {

    @POST
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @ApiOperation(value = "Difference operation", notes = "Performs difference operation on a graph", response = Graph.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Graph Returned", response = Graph.class),
        @ApiResponse(code = 400, message = "Invalid Difference Request", response = Void.class)
    })
    public Response difference(@Valid DifferenceRequest differenceRequest) {
        return Response.ok().entity("magic!").build();
    }
}
