import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as cytoscape from 'cytoscape';
import { Graph, Node, EdgeData, NodeData } from 'src/gen/generatedAngular';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-graph-canvas',
  templateUrl: './graph-canvas.component.html',
  styleUrls: ['./graph-canvas.component.scss']
})
export class GraphCanvasComponent implements OnInit {


  @Input('drawGraphEvent')
  public drawGraphEvent: Observable<Graph>;

  private drawSubscription: Subscription;

  private graph: Graph;

  @Input('forceLayout')
  public forceLayout: boolean;

  @Input('showDiff')
  public showDiff: boolean = false;

  @ViewChild("canvas", { read: ElementRef, static: true }) canvasReference: ElementRef;


  /**
 * Map of all possible values for the vertexLabelKey to a color in RGB format.
 * @type {{}}
 */
  public colorMap = {};

  /**
   * Buffers the last graph response from the server to improve redrawing speed.
   */
  public bufferedData;

  /**
   * True, if the graph layout should be force based
   * @type {boolean}
   */
  public useForceLayout = true;

  /**
   * True, if the default label should be used
   * @type {boolean}
   */
  public useDefaultLabel = true;

  /**
   * Maximum value for the count attribute of vertices
   * @type {number}
   */
  public maxVertexCount = 0;

  /**
   * Maximum value for the count attribute of edges
   * @type {number}
   */
  public maxEdgeCount = 0;

  private cy: cytoscape.Core;

  private coseLayout = {
    name: 'cose',
    // called on `layoutready`
    ready: function () {
    },
    // called on `layoutstop`
    stop: function () {
    },
    // whether to animate while running the layout
    animate: false,
    // number of iterations between consecutive screen positions update (0 ->
    // only updated on the end)
    refresh: 4,
    // whether to fit the network view after when done
    fit: true,
    // padding on fit
    padding: 30,
    // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    boundingBox: undefined,
    // whether to randomize node positions on the beginning
    randomize: true,
    // whether to use the JS console to print debug messages
    debug: false,
    // node repulsion (non overlapping) multiplier
    nodeRepulsion: 8000000,
    // node repulsion (overlapping) multiplier
    nodeOverlap: 10,
    // ideal edge (non nested) length
    idealEdgeLength: 1,
    // divisor to compute edge forces
    edgeElasticity: 100,
    // nesting factor (multiplier) to compute ideal edge length for nested edges
    nestingFactor: 5,
    // gravity force (constant)
    gravity: 250,
    // maximum number of iterations to perform
    numIter: 100,
    // initial temperature (maximum node displacement)
    initialTemp: 200,
    // cooling factor (how the temperature is reduced between consecutive iterations
    coolingFactor: 0.95,
    // lower temperature threshold (below this point the layout will end)
    minTemp: 1.0,
  };

  constructor() {
  }

  ngOnInit(): void {
    this.drawSubscription = this.drawGraphEvent.subscribe((graph: Graph) => {
      this.graph = graph;
      this.draw();
    });
  }

  draw() {
    this.cy.elements().remove();
    // set conaining all distinct labels (property key specified by vertexLabelKey)
    let labels = new Set();

    // compute maximum count of all vertices, used for scaling the vertex sizes
    for (let i = 0; i < this.graph.nodes.length; i++) {
      let node = this.graph.nodes[i];
      labels.add(node.data.label);
    }
    for (let i = 0; i < this.graph.edges.length; i++) {
      let edge = this.graph.edges[i];
      labels.add(edge.data.label);
    }

    // generate random colors for the vertex labels
    this.generateRandomColors(labels);


    if (!this.forceLayout) {
      let fallBackToForceLayout: boolean = false;
      let latNyc = 40.730610;
      let longNyc = -73.935242;
      let elementDefinitions: cytoscape.ElementDefinition[] = this.graph.nodes.map((node: Node) => {
        let elementDef: cytoscape.ElementDefinition = node;
        let lat: number = -200;
        let long: number = -200;
        node.data.properties.forEach((property) => {
          if (property.key === "lat") {
            lat = parseFloat(property.value) - latNyc;
          } else if (property.key === "long") {
            long = parseFloat(property.value) - longNyc;
          }
        });
        //Fall Back To Force Layout when a node doesnt have any coordinates and the spacial graph can not be rendered properly
        if (lat === -200 || long === -200) {
          fallBackToForceLayout = true;
        }
        elementDef.position = { x: lat * 60000, y: long * 60000 };
        return elementDef;
      });
      if (!fallBackToForceLayout) {
        this.cy.add(elementDefinitions);
        this.cy.nodes().ungrabify();
        this.cy.add(this.graph.edges);
      }
      else {
        this.forceLayout = true;
      }
    }
    if (this.forceLayout) {
      this.cy.add(this.graph.nodes);
      this.cy.add(this.graph.edges);
      let lay: cytoscape.Layouts = this.cy.layout(this.coseLayout);
      lay.run();
    }
    this.cy.fit();
  }

  ngAfterViewInit(): void {
    this.cy = cytoscape(<cytoscape.CytoscapeOptions>{
      container: this.canvasReference.nativeElement,
      style: (<any>cytoscape).stylesheet()
        .selector('node')
        .css({
          // define label content and font
          'content': (node) => {
            return node.data().label;
          },
          // if the count shall effect the vertex size, set font size accordingly
          'font-size': '10px',
          'text-valign': 'center',
          'color': 'black',
          'background-color': (node) => {
            if (this.showDiff) {
              let diff: string = node.data('properties')._diff;
              if (diff === "-1") {
                return '#D55';
              }
              else if (diff === "1") {
                return '#5D5';
              }
              else {
                return '#55D';
              }
            }
            else {
              let label = node.data().label;
              let color = this.colorMap[label];
              let result = '#';
              result += ('0' + color[0].toString(16)).substr(-2);
              result += ('0' + color[1].toString(16)).substr(-2);
              result += ('0' + color[2].toString(16)).substr(-2);
              return result;
            }
          },
          'width': '60px',
          'height': '60px',
          'text-wrap': 'wrap'
        })
        .selector('edge')
        .css({
          'curve-style': 'bezier',
          // layout of edge and edge label
          'content': (edge) => {
            return edge.data('label');
            //No writing on edges
          },
          // if the count shall effect the vertex size, set font size accordingly
          'font-size': '10',
          'line-color': (edge) => {
            let diff: string = edge.data('properties')._diff;
            if (diff === "-1") {
              return '#D22';
            }
            else if (diff === "1") {
              return '#2D2';
            }
            else if (diff === "0") {
              return '#22D';
            }
            else {
              return '#333';
            }
          },
          // width of edges can be determined by property count
          // count specifies that the edge represents 1 or more other edges
          'width': 5,
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#000'
        })
        // properties of edges and vertices in special states, e.g. invisible or faded
        .selector('.faded')
        .css({
          'opacity': 0.25,
          'text-opacity': 0
        })
        .selector('.invisible')
        .css({
          'opacity': 0,
          'text-opacity': 0
        })
    });

    this.cy.ready(() => {
      if (this.cy) {
        this.cy.elements().unselectify();
        /* if a vertex is selected, fade all edges and vertices
        that are not in direct neighborhood of the vertex */
        this.cy.on('tap', 'node', (e) => {
          let node = e.target;
          let neighborhood = node.neighborhood().add(node);
          console.log(node.data());

          this.cy.elements().addClass('faded');
          neighborhood.removeClass('faded');  

          let nodeData:EdgeData = node.data();
          this.showNodeInformation(nodeData);
        });
        this.cy.on('tap', 'edge', (e) => {
          let edge = e.target;
          let edgeData:EdgeData = edge.data();
          this.showEdgeInformation(edgeData);
          
        });
        // remove fading by clicking somewhere else
        this.cy.on('tap', (e) => {
          if (e.target === this.cy) {
            this.cy.elements().removeClass('faded');
          }
        });
      }
    });
  }

  /**
 * Generate a random color for each label
 * @param labels array of labels
 */
  generateRandomColors(labels) {
    this.colorMap = {};
    labels.forEach((label) => {
      let r = 0;
      let g = 0;
      let b = 0;
      while (r + g + b < 382) {
        r = Math.floor((Math.random() * 255));
        g = Math.floor((Math.random() * 255));
        b = Math.floor((Math.random() * 255));
      }
      this.colorMap[label] = [r, g, b];
    });
  }

  showEdgeInformation(edgeData:EdgeData){
    //Show Tooltip with Edge Data
    console.log(edgeData);
  }
  showNodeInformation(nodeData:NodeData){
    //Show Tooltip with Node Data
    console.log(nodeData);
  }

}
