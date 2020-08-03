package org.gradoop.demo.server.gen.io.swagger.api;


import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.KeysAndLabels;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/keys")
@Api(description = "the keys API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen")
public class KeysApi {

    @POST
    @Path("/{databaseName}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @ApiOperation(value = "Get/Compute Keys and Labels of this database", notes = "Labels and Keys for further processing", response = KeysAndLabels.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Keys And Labels", response = KeysAndLabels.class),
        @ApiResponse(code = 404, message = "Unknown databaseName", response = Void.class)
    })
    public Response getKeys(@PathParam("databaseName") @ApiParam("Name of Database that should be returned") String databaseName) {
        TemporalGraphService temporalGraphService = new TemporalGraphService();
        return temporalGraphService.getKeysAndLabels(databaseName);
    }
}