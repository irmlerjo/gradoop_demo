import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { TemporalPredicate, TimeStamp } from 'src/gen/generatedAngular';
import { NgxMatDatetimePicker } from '@angular-material-components/datetime-picker';
import { Moment } from 'moment';
import { RestService } from '../rest.service';
import { TimeSpan } from '../time-span';



export interface PredicateSelectOpt{
  value:TemporalPredicate,
  endRequired:boolean
}

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements AfterViewInit,OnInit {

  @ViewChild('startPicker') startPicker: NgxMatDatetimePicker<Date>;
  @ViewChild('endPicker') endPicker: NgxMatDatetimePicker<Date>;

  @Output("timeStamp") timeStampEvent = new EventEmitter<TimeStamp>();

  @Input("label") label:string;

  @Input("timeSpan")
  public timeSpan:TimeSpan;




  selectedPredicate:PredicateSelectOpt;
  predicates:PredicateSelectOpt[]=[];

  constructor() {
    let keys = Object.keys(TemporalPredicate);
    for (const key of keys) {
      if (key==TemporalPredicate.ASOF) {
        this.predicates.push(<PredicateSelectOpt>{value:key,endRequired:false}); 
      }
      else{
        this.predicates.push(<PredicateSelectOpt>{value:key,endRequired:true});   
      }
    }
  }
  ngOnInit(){
  }

  ngAfterViewInit(): void {
    this.startPicker._selectedChanged.subscribe(()=>{
      this.publishChanges();
    });

    this.endPicker._selectedChanged.subscribe(()=>{
      this.publishChanges();
    });

    console.log(this.timeSpan);
  }

  publishChanges():void{
    this.timeStampEvent.emit(<TimeStamp>{predicate:this.selectedPredicate.value,startDate:this.startPicker._selected,endDate:this.endPicker._selected});
  }
  

}
