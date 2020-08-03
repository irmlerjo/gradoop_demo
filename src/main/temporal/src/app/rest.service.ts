import { Injectable, Inject } from '@angular/core';
import { SnapshotRequest, TimeDimension, TemporalPredicate, DefaultService, TimeStamp, DifferenceRequest, Graph, GroupingRequest,GroupingKey, AggregationKey, KeysAndLabels, KeysAndLabelsVertexKeys } from 'src/gen/generatedAngular';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public defaultService:DefaultService) {
  }

  public snapshot(dbName:string,timeStamp:TimeStamp,timeDimension:TimeDimension):Promise<Graph> {    
    let snapshotJson: SnapshotRequest = {
      timeDim: timeDimension,
      timeStamp:
      {
        predicate: timeStamp.predicate,
        startDate: timeStamp.startDate,
        endDate: timeStamp.endDate ?timeStamp.endDate: null
      },
      dbName: dbName
    }
    let result = this.defaultService.snapshot(snapshotJson);
    return result.toPromise();
  }

  public difference(dbName:string,from:TimeStamp,to:TimeStamp,timeDimension:TimeDimension) {

    let differenceJson: DifferenceRequest = {
      timeDim: timeDimension,
      from:
      {
        predicate: from.predicate,
        startDate: from.startDate,
        endDate: from.endDate ? from.endDate : null
      },
      to:
      {
        predicate: to.predicate,
        startDate: to.startDate,
        endDate: to.endDate ? to.endDate : null
      },
      dbName: dbName
    }
    return this.defaultService.difference(differenceJson).toPromise();
  }

  public grouping(dbName:string,groupingKeys:Array<GroupingKey>,aggregationFunctions:Array<AggregationKey>){
    let vertexKeys = groupingKeys.filter((key)=>{
      return key.forVertex;
    });
    let edgeKeys = groupingKeys.filter((key)=>{
      return !key.forVertex;
    });
    let vertexAggrFuncs = aggregationFunctions.filter((aggrFunc)=>{
      return aggrFunc.forEdges;
    });
    let edgeAggrFuncs = aggregationFunctions.filter((aggrFunc)=>{
      return aggrFunc.forEdges;
    });
    let groupingJson: GroupingRequest = {
      dbName:  dbName,
      vertexKeys: vertexKeys,
      edgeKeys: edgeKeys,
      vertexAggrFuncs: vertexAggrFuncs,
      edgeAggrFuncs: edgeAggrFuncs
    }
    return this.defaultService.grouping(groupingJson).toPromise();
  }
/**
  public async getPropertiesForLabel(dbName:string,label:string):Promise<Array<string>>{
    let keys:KeysAndLabels = await this.defaultService.getKeys(dbName).toPromise();
    return this.filterKeysForLabel(keys,label).map((key)=>{
      return key.name;
    });
  }

  private filterKeysForLabel(keys:KeysAndLabels,searchedLabel:string){
    //Check which Properties are used with the given node label
    let applicableVertexKeys:KeysAndLabelsVertexKeys[] = keys.vertexKeys.filter((vertexKey)=>{
      let correctLabel = vertexKey.labels.filter((label)=>{
        return searchedLabel===label;   
      });
      return correctLabel.length>0;
    });
    //Check which Properties are used with the given edge label
    let applicableEdgeKeys:KeysAndLabelsVertexKeys[] = keys.edgeKeys.filter((edgeKey)=>{
      let correctLabel = edgeKey.labels.filter((label)=>{
        return searchedLabel===label;   
      });
      return correctLabel.length>0;
    });
    return applicableEdgeKeys.concat(applicableVertexKeys);
  }**/


  public async getKeysAndLabels(dbName:string):Promise<KeysAndLabels>{
    let keysAndLabels:KeysAndLabels = await this.defaultService.getKeys(dbName).toPromise();
    return keysAndLabels;
  }


  public getGraphs():Promise<Array<string>>{
    return this.defaultService.getGraphs().toPromise();
  }
  public getGraph(dbName:string):Promise<Graph>{
    return this.defaultService.getGraph(dbName).toPromise();    
  }

}

