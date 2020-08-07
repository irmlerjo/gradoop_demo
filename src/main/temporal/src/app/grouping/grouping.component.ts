import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import * as cytoscape from 'cytoscape';
import { TimeDimension, ChronoUnit, TimeField, ChronoField, AggregationType, GroupingKey, GroupingType, KeysAndLabels, AggregationKey, KeysAndLabelsVertexKeys, KeysAndLabelsEdgeKeys, Graph } from 'src/gen/generatedAngular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupingKeyComponent } from '../grouping-key/grouping-key.component';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent {

  //Currently entered DB Name
  public dbName: string;
  //Grouping Keys
  public groupingKeys: GroupingKey[] = [];
  //Aggregation Functions
  public aggregationFunctions: AggregationKey[] = [];
  public timeStamp = null;
  public chronoFieldEnum = ChronoField;
  public chronoUnitEnum = ChronoUnit;
  public aggregationFunctionEnum = AggregationType;
  public timeFieldEnum = TimeField;
  public timeDimensionEnum = TimeDimension;
  public groupingTypeEnum = GroupingType;
  public keysAndLabels: KeysAndLabels;
  public groupingForm:FormGroup;
  @ViewChild(GroupingKeyComponent) childComponent: GroupingKeyComponent;
  public drawGraphSubject:Subject<Graph> = new Subject<Graph>();
  

  constructor(public restService: RestService) {

  }

  addGroupingKey() {
    this.groupingKeys.push({ groupingType: GroupingType.NOTHING, labelSpecific: false, forVertex: true });
  }
  
  addAggregationFunction() {
    this.aggregationFunctions.push({});
  }
  removeAggregationFunction() {
    this.aggregationFunctions.pop();
  }

  ngOnInit(){
    this.groupingForm = new FormGroup({
      db: new FormControl('', [Validators.required]),
      groupingType: new FormControl('', Validators.required),
      label: new FormControl('', Validators.required),
      property: new FormControl('', Validators.required),
      chronoUnit: new FormControl('', Validators.required),
      chronoField: new FormControl('', Validators.required)
    });
  }

  /**
   * User presses Execute Button
   * Triggers Backend calls.
   */
  public async onExecute() {
    let graph: Graph = await this.restService.grouping(this.dbName, this.groupingKeys, this.aggregationFunctions);  
    this.drawGraphSubject.next(graph);
  }
  /**
   * Change model when the user changes the db name in the according component
   * 
   * @param dbName 
   */
  public async onDbNameChanged(dbName: string) {
    this.dbName = dbName;
    this.keysAndLabels = await this.restService.getKeysAndLabels(dbName);
    console.log(dbName);
  }
  public trackByIndex(index: number, obj: any): any {
    return index;
  }
  public trackByIndexAggregate(index: number, obj: any): any {
    return index;
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
  public removeGroupingKey(groupingKey:GroupingKey){
    this.groupingKeys.splice(this.groupingKeys.indexOf(groupingKey),1);
  }

}
