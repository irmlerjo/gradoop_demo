import { Component, AfterViewInit } from '@angular/core';
import { RestService } from '../rest.service';
import * as cytoscape from 'cytoscape';
import { TimeDimension, ChronoUnit, TimeField, ChronoField, AggregationType, GroupingKey, GroupingType, KeysAndLabels, AggregationKey, KeysAndLabelsVertexKeys, KeysAndLabelsEdgeKeys, Graph } from 'src/gen/generatedAngular';



@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements AfterViewInit {

  //Currently entered DB Name
  public dbName: string;

  //Grouping Keys
  public groupingKeys: GroupingKey[] = [];

  //Aggregation Functions
  public aggregationFunctions: AggregationKey[] = [];

  public timeStamp = null;

  private cy: cytoscape.Core;

  public chronoFieldEnum = ChronoField;
  public chronoUnitEnum = ChronoUnit;
  public aggregationFunctionEnum = AggregationType;
  public timeFieldEnum = TimeField;
  public timeDimensionEnum = TimeDimension;
  public groupingTypeEnum = GroupingType;

  public keysAndLabels: KeysAndLabels;

  public labels: string[] = [];

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


  constructor(public restService: RestService) {
  }

  ngAfterViewInit(): void {
    this.cy = cytoscape(<any>{
      container: document.getElementById('groupingCanvas'),
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
            let label = node.data().label;
            let color = this.colorMap[label];
            let result = '#';
            result += ('0' + color[0].toString(16)).substr(-2);
            result += ('0' + color[1].toString(16)).substr(-2);
            result += ('0' + color[2].toString(16)).substr(-2);
            return result;
          },
          'width': '60px',
          'height': '60px',
          'text-wrap': 'wrap'
        })
        .selector('edge')
        .css({
          'curve-style': 'haystack',
          // layout of edge and edge label
          'content': (edge) => {
            //No writing on edges
          },
          // if the count shall effect the vertex size, set font size accordingly
          'font-size': '10',
          'line-color': '#999',
          // width of edges can be determined by property count
          // count specifies that the edge represents 1 or more other edges
          'width': 2,
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
        }),
      ready: () => {
        if (this.cy) {
          this.cy.elements().unselectify();
          /* if a vertex is selected, fade all edges and vertices
          that are not in direct neighborhood of the vertex */
          this.cy.on('tap', 'node', (e: any) => {
            let node = e.cyTarget;
            let neighborhood = node.neighborhood().add(node);

            this.cy.elements().addClass('faded');
            neighborhood.removeClass('faded');
          });
          // remove fading by clicking somewhere else
          this.cy.on('tap', (e: any) => {

            if (e.cyTarget === this.cy) {
              this.cy.elements().removeClass('faded');
            }
          });
        }
      }
    });
    console.log(this.cy);
    
  }

  addGroupingKey() {
    this.groupingKeys.push({ groupingType: GroupingType.NOTHING, labelSpecific: false, forVertex: true });
  }
  removeGroupingKey() {
    this.groupingKeys.pop();
  }

  addAggregationFunction() {
    this.aggregationFunctions.push({});
  }
  removeAggregationFunction() {
    this.aggregationFunctions.pop();
  }


  /**
   * User presses Execute Button
   * Triggers Backend calls.
   */
  public async onExecute() {
    let graph: Graph = await this.restService.grouping(this.dbName, this.groupingKeys, this.aggregationFunctions);
    console.log(graph);
    this.cy.elements().remove();
    // set conaining all distinct labels (property key specified by vertexLabelKey)
    let labels = new Set();

    // compute maximum count of all vertices, used for scaling the vertex sizes
    for (let i = 0; i < graph.nodes.length; i++) {
      let node = graph.nodes[i];
      labels.add(node.data.label);
    }
    for (let i = 0; i < graph.edges.length; i++) {
      let edge = graph.edges[i];
      labels.add(edge.data.label);
    }
    // generate random colors for the vertex labels
    this.generateRandomColors(labels);

    this.cy.add(graph.nodes);
    this.cy.add(graph.edges);
    let forceLayout = {
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

    let lay:cytoscape.Layouts = this.cy.layout(forceLayout);
    lay.run();
  }

  /**
* Generate a random color for each label
* @param labels array of labels
*/
  public generateRandomColors(labels) {
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
  /**
   * Change model when the user changes the db name in the according component
   * 
   * @param dbName 
   */
  public async onDbNameChanged(dbName: string) {
    this.dbName = dbName;
    this.keysAndLabels = await this.restService.getKeysAndLabels(dbName);
    this.setKeysAndLabels();
    console.log(dbName);
  }
  public setKeysAndLabels() {
    this.labels = this.keysAndLabels.edgeLabels.concat(this.keysAndLabels.vertexLabels);
  }
  public selectedLabelProperties(label: string) {
    return this.filterKeysForLabel(label);
  }
  public trackByIndex(index: number, obj: any): any {
    return index;
  }
  public trackByIndexAggregate(index: number, obj: any): any {
    return index;
  }
  private filterKeysForLabel(searchedLabel: string) {
    if (!searchedLabel) {
      return [];
    }
    //Check which Properties are used with the given node label
    let applicableVertexKeys: KeysAndLabelsVertexKeys[] = this.keysAndLabels.vertexKeys.filter((vertexKey) => {
      let correctLabel = vertexKey.labels.filter((label) => {
        return searchedLabel === label;
      });
      return correctLabel.length > 0;
    });
    //Check which Properties are used with the given edge label
    let applicableEdgeKeys: KeysAndLabelsEdgeKeys[] = this.keysAndLabels.edgeKeys.filter((edgeKey) => {
      let correctLabel = edgeKey.labels.filter((label) => {
        return searchedLabel === label;
      });
      return correctLabel.length > 0;
    });
    return applicableEdgeKeys.concat(applicableVertexKeys);
  }

  public propertiesWithNumericalValues(): string[] {
    let applicableVertexKeys: string[] = this.keysAndLabels.vertexKeys.filter((vertexKey) => {
      return vertexKey.numerical;
    }).map((vertexKey) => {
      return vertexKey.name;
    });
    //Check which Properties are used with the given edge label
    let applicableEdgeKeys: string[] = this.keysAndLabels.edgeKeys.filter((edgeKey) => {
      return edgeKey.numerical;
    }).map((edgeKey) => {
      return edgeKey.name;
    });
    return applicableEdgeKeys.concat(applicableVertexKeys);
  }

  public isAggrTimeDimRequired(aggrType: AggregationType): boolean {
    switch (aggrType) {
      case AggregationType.MAXTIME:
      case AggregationType.MINDURATION:
      case AggregationType.MINTIME:
      case AggregationType.AVERAGEDURATION:
      case AggregationType.MAXDURATION:
        return true;
      default:
        return false;
    }
  }
  public isAggrTimeFieldRequired(aggrType: AggregationType): boolean {
    switch (aggrType) {
      case AggregationType.MINTIME:
      case AggregationType.MAXTIME:
        return true;
      default:
        return false;
    }
  }
  public isAggrPropertyFieldRequired(aggrType: AggregationType): boolean {
    switch (aggrType) {
      case AggregationType.MIN:
      case AggregationType.MAX:
      case AggregationType.SUM:
        return true;
      default:
        return false;
    }
  }
  public isGroupingTimeDimRequired(groupingType: GroupingType): boolean {
    switch (groupingType) {
      case GroupingType.DURATION:
      case GroupingType.TIMEINTERVAL:
      case GroupingType.TIMESTAMP:
      case GroupingType.TIMESTAMPFIELD:
        return true;
      default:
        return false;
    }
  }
  public isGroupingTimeFieldRequired(groupingType: GroupingType): boolean {
    switch (groupingType) {
      case GroupingType.TIMESTAMP:
      case GroupingType.TIMESTAMPFIELD:
        return true;
      default:
        return false;
    }
  }

}