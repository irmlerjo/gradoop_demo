package org.gradoop.demo.server.gen.io.swagger.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.Graph;
import org.gradoop.demo.server.gen.io.swagger.model.GroupingRequest;

import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/grouping")
@Api(description = "the grouping API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen")
public class GroupingApi {

    @POST
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @ApiOperation(value = "grouping operation", notes = "Performs Snapshot operation on a graph", response = Graph.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Graph Returned", response = Graph.class),
        @ApiResponse(code = 400, message = "Invalid Grouping Request", response = Void.class)
    })
    public Response grouping(@Valid GroupingRequest groupingRequest) {
        TemporalGraphService temporalGraphService = new TemporalGraphService();
        try {
            return Response.ok(temporalGraphService.grouping(groupingRequest)).build();
        } catch (Exception e) {
            return Response.serverError().build();
        }
    }
}
