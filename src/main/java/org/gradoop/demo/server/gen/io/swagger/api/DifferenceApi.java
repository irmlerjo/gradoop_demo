package org.gradoop.demo.server.gen.io.swagger.api;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.DifferenceRequest;
import org.gradoop.demo.server.gen.io.swagger.model.Graph;

import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

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
        try {
            return Response.ok(temporalGraphService.difference(differenceRequest)).build();
        } catch (Exception e) {
            e.printStackTrace();
            //Currently all failed requests return an internal server error, even if the api is used incorrectly. (should be 400)
            return Response.serverError().build();
        }
    }
}
