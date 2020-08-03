/*
 * Copyright © 2014 - 2018 Leipzig University (Database Research Group)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradoop.demo.server;

import com.sun.jersey.api.container.grizzly2.GrizzlyServerFactory;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.core.ResourceConfig;
import com.sun.jersey.api.json.JSONConfiguration;
import org.glassfish.grizzly.http.server.*;
import org.gradoop.demo.server.gen.io.swagger.api.RestApplication;

import javax.ws.rs.core.UriBuilder;
import java.io.IOException;
import java.net.URI;

/**
 * Basic class, used for starting and stopping the server.
 */
public class Server {

  /**
   * URI that specifies where the server is run.
   */
  private static final URI BASE_URI = getBaseURI();

  /**
   * URI that specifies where the server is run.
   */
  private static final URI BASE_URI_TEMPORAL = getBaseURITemporal();
  /**
   * Default port
   */
  private static final int PORT = 2342;
  /**
   * Alternate port for Temporal Graph
   */
  private static final int PORT_TEMPORAL = 2347;
  /**
   * Path to demo application
   */
  private static final String APPLICATION_PATH = "gradoop/html/grouping.html";

  /**
   * Path to temporal Angular application
   */
  private static final String ANGULAR_PATH = "temporal/dist/ClientTemporalGraph/";

  /**
   * Creates the base URI.
   * @return Base URI
   */
  private static URI getBaseURI() {
    return UriBuilder.fromUri("http://localhost/").port(PORT).build();
  }

  /**
   * Creates the base URI.
   * @return Base URI
   */
  private static URI getBaseURITemporal() {
    return UriBuilder.fromUri("http://localhost/").port(PORT_TEMPORAL).build();
  }

  /**
   * Starts the server and adds the request handlers.
   *
   * @return the running server
   * @throws IOException if server creation fails
   */
  private static HttpServer startServerTemporal() throws IOException {
    System.out.println("Starting grizzly...");
    // Init with server Config
    ResourceConfig rc = new PackagesResourceConfig("org/gradoop/demo/server/gen/io/swagger/api");
    rc.getFeatures().put(JSONConfiguration.FEATURE_POJO_MAPPING, true);
    HttpServer server = GrizzlyServerFactory.createHttpServer(BASE_URI_TEMPORAL, rc);
    //Add new Client Http Handler for Temporal Graph Support
    HttpHandler angularHandler = new StaticHttpHandler(
     Server.class.getResource("/temporal").getPath());
    server.getServerConfiguration().addHttpHandler( angularHandler, "/temporal" );
    return server;
  }

  private static HttpServer startServer() throws IOException {
    ResourceConfig rc = new PackagesResourceConfig("org/gradoop/demo/server/oldApi");
    rc.getFeatures().put(JSONConfiguration.FEATURE_POJO_MAPPING, true);
    HttpServer server = GrizzlyServerFactory.createHttpServer(BASE_URI, rc);
    //Add Client Http Handler
    HttpHandler groupingHandler = new StaticHttpHandler(
            Server.class.getResource("/web").getPath());
    server.getServerConfiguration().addHttpHandler( groupingHandler, "/gradoop" );
    return server;
  }

  /**
   * Main method. Run this to start the server.
   *
   * @param args command line parameters
   * @throws IOException if server creation fails
   */
  public static void main(String[] args) throws IOException {
    HttpServer httpServer = startServer();
    System.out.printf("org.gradoop.demos.grouping.server started at %s%s%n" +
            "Press any key to stop it.%n", getBaseURI(), APPLICATION_PATH);
    HttpServer httpServerTemporal = startServerTemporal();
    System.out.printf("org.gradoop.demos.grouping.server started at %s%s%n" +
            "Press any key to stop it.%n", getBaseURITemporal(), ANGULAR_PATH);
    System.in.read();
    httpServer.stop();
    httpServerTemporal.stop();
  }
}
