package org.gradoop.demo.server.gen.io.swagger.api;


import io.swagger.annotations.*;
import org.gradoop.demo.server.TemporalGraphService;
import org.gradoop.demo.server.gen.io.swagger.model.TimeDimension;
import org.gradoop.demo.server.gen.io.swagger.model.TimeSpan;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("/time")
@Api(description = "the time API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJAXRSSpecServerCodegen")
public class TimeApi {

    @POST
    @Path("/{databaseName}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @ApiOperation(value = "Get/Compute Time Information about this graph", notes = "TimeSpan in which information in this graph is.", response = TimeSpan.class, tags={  })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Max and Min TimeSpan", response = TimeSpan.class),
            @ApiResponse(code = 400, message = "Bad Request", response = Void.class)
    })
    public Response getTime(@PathParam("databaseName") @ApiParam("Name of Database that should be returned") String databaseName, @PathParam("timeDim") @ApiParam("Time Dimension") TimeDimension timeDim) {
        TemporalGraphService temporalGraphService = new TemporalGraphService();
        try {
            return Response.ok(temporalGraphService.getTimeSpan(databaseName, timeDim)).build();
        } catch (Exception e) {
           return Response.serverError().build();
        }
    }
}
