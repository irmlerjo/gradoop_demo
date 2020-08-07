import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationFunctionComponent } from './aggregation-function.component';

describe('AggregationFunctionComponent', () => {
  let component: AggregationFunctionComponent;
  let fixture: ComponentFixture<AggregationFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregationFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
