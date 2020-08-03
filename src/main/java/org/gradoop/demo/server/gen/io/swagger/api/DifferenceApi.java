package org.gradoop.demo.server.gen.io.swagger.api;


import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.DifferenceRequest;
import org.gradoop.demo.server.pojo.model.Graph;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/difference")
@Api(description = "the difference API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen")
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
        TemporalGraphService temporalGraphService = new TemporalGraphService();
        return temporalGraphService.difference(differenceRequest);
    }
}
