import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRunningAddComponent } from './tracking-running-add.component';

describe('TrackingRunningAddComponent', () => {
  let component: TrackingRunningAddComponent;
  let fixture: ComponentFixture<TrackingRunningAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingRunningAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRunningAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
