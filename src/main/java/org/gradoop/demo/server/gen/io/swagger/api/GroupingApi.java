package org.gradoop.demo.server.gen.io.swagger.api;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.Graph;
import org.gradoop.demo.server.gen.io.swagger.model.GroupingRequest;
import org.gradoop.demo.server.gen.io.swagger.model.SnapshotRequest;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

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
        return temporalGraphService.grouping(groupingRequest);
    }
}
