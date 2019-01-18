import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingEllipticalComponent } from './tracking-elliptical.component';

describe('TrackingEllipticalComponent', () => {
  let component: TrackingEllipticalComponent;
  let fixture: ComponentFixture<TrackingEllipticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingEllipticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEllipticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
