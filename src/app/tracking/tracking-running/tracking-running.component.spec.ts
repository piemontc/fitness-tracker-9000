import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRunningComponent } from './tracking-running.component';

describe('TrackingRunningComponent', () => {
  let component: TrackingRunningComponent;
  let fixture: ComponentFixture<TrackingRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
