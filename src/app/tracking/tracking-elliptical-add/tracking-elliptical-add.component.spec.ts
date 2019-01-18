import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingEllipticalAddComponent } from './tracking-elliptical-add.component';

describe('TrackingEllipticalAddComponent', () => {
  let component: TrackingEllipticalAddComponent;
  let fixture: ComponentFixture<TrackingEllipticalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingEllipticalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEllipticalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
