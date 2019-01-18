import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRowerComponent } from './tracking-rower.component';

describe('TrackingRowerComponent', () => {
  let component: TrackingRowerComponent;
  let fixture: ComponentFixture<TrackingRowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingRowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
