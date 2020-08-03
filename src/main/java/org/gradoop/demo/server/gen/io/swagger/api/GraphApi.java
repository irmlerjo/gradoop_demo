package org.gradoop.demo.server.gen.io.swagger.api;


import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.Graph;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/graph")
@Api(description = "the graph API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen")
public class GraphApi {

    @POST
    @Path("/{databaseName}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @ApiOperation(value = "Return whole graph", notes = "Returns the selected Graph in cytoscape format", response = Graph.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Graph Returned", response = Graph.class),
        @ApiResponse(code = 404, message = "databaseName does not exist", response = Void.class)
    })
    public Response getGraph(@PathParam("databaseName") @ApiParam("Name of Database that should be returned") String databaseName) {
        TemporalGraphService temporalGraphService = new TemporalGraphService();
        try {
            return temporalGraphService.getGraph(databaseName);
        }
        catch(Exception ex){
            return Response.serverError().build();
        }
    }

    @GET
    @Produces({ "application/json" })
    @ApiOperation(value = "Get available Graphs", notes = "Get the names of all available graphs on server", response = String.class, responseContainer = "List", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "search results matching criteria", response = String.class, responseContainer = "List")
    })
    public Response getGraphs() {
        TemporalGraphService temporalGraphService = new TemporalGraphService();
        return temporalGraphService.getGraphs();
    }
}
