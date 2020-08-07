import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Graph, TimeStamp, TimeDimension } from 'src/gen/generatedAngular';
import { Subject } from 'rxjs';
import { TimeSpan } from '../time-span';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.scss']
})
export class DifferenceComponent {


  public fromTimeStamp = null;
  public toTimeStamp = null;
  public dbName: string = null;
  public timeDim = "valid";
  public timeSpan: TimeSpan=null;


  public drawGraphSubject: Subject<Graph> = new Subject<Graph>();


  constructor(public restService: RestService) { }


  public async onExecute() {
    let graph: Graph = await this.restService.difference(this.dbName, this.fromTimeStamp, this.toTimeStamp, this.timeDim === "valid" ? TimeDimension.VALIDTIME : TimeDimension.TRANSACTIONTIME);
    this.drawGraphSubject.next(graph);
  }
  public onFromChanged(timeStamp: TimeStamp) {
    this.fromTimeStamp = timeStamp;
    console.log(timeStamp);
  }
  public onToChanged(timeStamp: TimeStamp) {
    this.toTimeStamp = timeStamp;
    console.log(timeStamp);
  }
  public onDbNameChanged(dbName: string) {
    this.dbName = dbName;
    this.timeSpan = this.restService.getValidTimes(dbName);
    console.log(dbName);
  }

}
