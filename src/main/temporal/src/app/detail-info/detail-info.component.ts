import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EdgeData, NodeData } from 'src/gen/generatedAngular';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  public isNodeInfo: boolean;
  public nodeData: NodeData;
  public edgeData: EdgeData;

  constructor(public dialogRef: MatDialogRef<DetailInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    if (data.edgeData) {
      this.isNodeInfo = false;
      this.edgeData=data.edgeData;
    }
    else if (data.nodeData) {
      this.isNodeInfo = true;
      this.nodeData=data.nodeData;
    }
    else {
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
  }
  clickClose(){
    this.dialogRef.close();    
  }

}
