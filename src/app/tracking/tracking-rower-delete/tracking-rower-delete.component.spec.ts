import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRowerDeleteComponent } from './tracking-rower-delete.component';

describe('TrackingRowerDeleteComponent', () => {
  let component: TrackingRowerDeleteComponent;
  let fixture: ComponentFixture<TrackingRowerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingRowerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRowerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
