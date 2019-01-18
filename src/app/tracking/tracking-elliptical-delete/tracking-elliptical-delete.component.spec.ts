import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingEllipticalDeleteComponent } from './tracking-elliptical-delete.component';

describe('TrackingEllipticalDeleteComponent', () => {
  let component: TrackingEllipticalDeleteComponent;
  let fixture: ComponentFixture<TrackingEllipticalDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingEllipticalDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEllipticalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
