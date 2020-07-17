package io.swagger.api;

import io.swagger.model.Graph;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/graph")
@Api(description = "the graph API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen", date = "2020-07-14T15:22:29.296Z")
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
        return Response.ok().entity("magic!").build();
    }

    @GET
    @Produces({ "application/json" })
    @ApiOperation(value = "Get available Graphs", notes = "Get the names of all available graphs on server", response = String.class, responseContainer = "List", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "search results matching criteria", response = String.class, responseContainer = "List")
    })
    public Response getGraphs() {
        return Response.ok().entity("magic!").build();
    }
}
