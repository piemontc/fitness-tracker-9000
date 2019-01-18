import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRunningDeleteComponent } from './tracking-running-delete.component';

describe('TrackingRunningDeleteComponent', () => {
  let component: TrackingRunningDeleteComponent;
  let fixture: ComponentFixture<TrackingRunningDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingRunningDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRunningDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
