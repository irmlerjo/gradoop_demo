package org.gradoop.demo.server.gen.io.swagger.api;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.Graph;
import org.gradoop.demo.server.gen.io.swagger.model.SnapshotRequest;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/snapshot")
@Api(description = "the snapshot API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen")
public class SnapshotApi {

    @POST
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @ApiOperation(value = "Snapshot operation", notes = "Performs Snapshot operation on a graph", response = Graph.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Graph Returned", response = Graph.class),
        @ApiResponse(code = 400, message = "Invalid snapshot Request", response = Void.class)
    })
    public Response snapshot(@Valid SnapshotRequest snapshotRequest) {

        TemporalGraphService temporalGraphService = new TemporalGraphService();
        return temporalGraphService.snapshot(snapshotRequest);
    }
}
