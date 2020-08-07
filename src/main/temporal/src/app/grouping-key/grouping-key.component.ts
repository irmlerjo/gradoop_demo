import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { GroupingKey, GroupingType, TimeDimension, TimeField, ChronoUnit, ChronoField, KeysAndLabelsVertexKeys, KeysAndLabelsEdgeKeys, KeysAndLabels } from 'src/gen/generatedAngular';

@Component({
  selector: 'app-grouping-key',
  templateUrl: './grouping-key.component.html',
  styleUrls: ['./grouping-key.component.scss']
})
export class GroupingKeyComponent{

  @Input("groupingKey")
  public groupingKey: GroupingKey;

  @Input("keysAndLabels")
  public keysAndLabels: KeysAndLabels;

  @Output("groupingKeyRemoved")
  public groupingKeyRemoved:EventEmitter<GroupingKey> = new EventEmitter();


  public labelSelection: string[] = [];
  public propertySelection: string[] = [];


  constructor() {}

  public chronoFieldEnum = ChronoField;
  public chronoUnitEnum = ChronoUnit;

  public timeFieldEnum = TimeField;
  public timeDimensionEnum = TimeDimension;
  public groupingTypeEnum = GroupingType;

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
  public filterKeysForLabel(searchedLabel: string) {
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

  public groupingTypeChanged() {
    //Change Detection GroupingType
    switch (this.groupingKey.groupingType) {
      case GroupingType.DURATION:
        break;
      case GroupingType.LABEL:
        this.groupingKey.forVertex = true;
        this.groupingKey.labelSpecific = false;
        this.onVertexToggleChange(true);
        break;
      case GroupingType.NOTHING:
        break;
      case GroupingType.PROPERTY:
        this.groupingKey.forVertex = true;
        this.groupingKey.labelSpecific = false;
        this.onVertexToggleChange(true);
        break;
      case GroupingType.TIMEINTERVAL:
        break;
      case GroupingType.TIMESTAMP:
        break;
      case GroupingType.TIMESTAMPFIELD:
        break;
    }
  }
  public labelChanged() {

  }

  onVertexToggleChange(forVertex: boolean) {
    if (forVertex) {
      if (this.keysAndLabels && this.keysAndLabels.vertexLabels && this.keysAndLabels.vertexLabels.length > 0) {
        this.groupingKey.label = this.keysAndLabels.vertexLabels[0];
        this.labelSelection = this.keysAndLabels.vertexLabels;
      }
      else {
        //TODO: Display Error Message (Please select Graph or Graph is not suitable for this kind of grouping.)
      }
    }
    else {
      if (this.keysAndLabels && this.keysAndLabels.edgeLabels && this.keysAndLabels.edgeLabels.length > 0) {
        this.groupingKey.label = this.keysAndLabels.edgeLabels[0];
        this.labelSelection = this.keysAndLabels.edgeLabels;
      }
      else {
        //TODO: Display Error Message (Please select Graph)
      }
    }
  }
  removeGroupingKey(){
    this.groupingKeyRemoved.emit(this.groupingKey);
  }

}
