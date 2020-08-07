import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { TimeStamp, Graph, TimeDimension } from 'src/gen/generatedAngular';
import { Subject } from 'rxjs';
import { TimeSpan } from '../time-span';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent {

  public timeStamp = null;
  public dbName: string;
  public timeDim="valid";
  public drawGraphSubject:Subject<Graph> = new Subject<Graph>();
  public timeSpan:TimeSpan=null;

  constructor(public restService: RestService) {
  }


  public async onExecute() {
    let graph: Graph = await this.restService.snapshot(this.dbName, this.timeStamp,this.timeDim==="valid"?TimeDimension.VALIDTIME:TimeDimension.TRANSACTIONTIME);    
    this.drawGraphSubject.next(graph);
  }
  public onTimeStampChanged(timeStamp: TimeStamp) {
    this.timeStamp = timeStamp;
    console.log(timeStamp);
  }
  public onDbNameChanged(dbName: string) {
    this.dbName = dbName;
    this.timeSpan=this.restService.getValidTimes(this.dbName);
    console.log(dbName);
  }
}
