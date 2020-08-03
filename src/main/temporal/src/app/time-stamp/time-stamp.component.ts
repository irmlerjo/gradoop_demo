import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { TemporalPredicate, TimeStamp } from 'src/gen/generatedAngular';
import { NgxMatDatetimePicker } from '@angular-material-components/datetime-picker';
import { Moment } from 'moment';



export interface PredicateSelectOpt{
  value:TemporalPredicate,
  endRequired:boolean
}

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements AfterViewInit {

  @ViewChild('startPicker') startPicker: NgxMatDatetimePicker<Moment>;
  @ViewChild('endPicker') endPicker: NgxMatDatetimePicker<Moment>;

  @Output("timeStamp") timeStampEvent = new EventEmitter<TimeStamp>();

  @Input("label") label:string;




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

  ngAfterViewInit(): void {
    this.startPicker._selectedChanged.subscribe(()=>{

      this.publishChanges();
    });

    this.endPicker._selectedChanged.subscribe(()=>{

      this.publishChanges();
    });
  }

  publishChanges():void{
    this.timeStampEvent.emit(<TimeStamp>{predicate:this.selectedPredicate.value,startDate:this.startPicker._selected?.toDate(),endDate:this.endPicker._selected?.toDate()});
  }
  

}
