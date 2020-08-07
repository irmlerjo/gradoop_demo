import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SelectGraphComponent } from './select-graph/select-graph.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { DifferenceComponent } from './difference/difference.component';
import { GroupingComponent } from './grouping/grouping.component'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { DefaultService } from 'src/gen/generatedAngular';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EnumKeysPipe } from './enum-keys-pipe';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GroupingKeyComponent } from './grouping-key/grouping-key.component';
import { AggregationFunctionComponent } from './aggregation-function/aggregation-function.component';
import { GraphCanvasComponent } from './graph-canvas/graph-canvas.component';
import {MatIconModule} from '@angular/material/icon';
import { DetailInfoComponent } from './detail-info/detail-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectGraphComponent,
    SnapshotComponent,
    DifferenceComponent,
    GroupingComponent,
    TimeStampComponent,
    EnumKeysPipe,
    GroupingKeyComponent,
    AggregationFunctionComponent,
    GraphCanvasComponent,
    DetailInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  providers: [
  DefaultService,
  RestService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
