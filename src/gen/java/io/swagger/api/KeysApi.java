package io.swagger.api;

import io.swagger.model.KeysAndLabels;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import io.swagger.annotations.*;

import java.util.Map;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/keys")
@Api(description = "the keys API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen", date = "2020-07-14T15:22:29.296Z")
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
        return Response.ok().entity("magic!").build();
    }
}
