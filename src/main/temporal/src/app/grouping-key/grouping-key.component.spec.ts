import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingKeyComponent } from './grouping-key.component';

describe('GroupingKeyComponent', () => {
  let component: GroupingKeyComponent;
  let fixture: ComponentFixture<GroupingKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
