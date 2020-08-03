import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-select-graph',
  templateUrl: './select-graph.component.html',
  styleUrls: ['./select-graph.component.scss']
})
export class SelectGraphComponent implements OnInit {

  @Output("dbName") dbEvent = new EventEmitter<string>();

  public graphs: string[]=[];
  public selectedGraph:string;
  constructor(public restService:RestService) {
    restService.getGraphs().then((availableGraphs)=>{
      this.graphs=availableGraphs;
    });    
   }

  ngOnInit(): void {
  }
  public publishChanges(){
    this.dbEvent.emit(this.selectedGraph);
  }
}
