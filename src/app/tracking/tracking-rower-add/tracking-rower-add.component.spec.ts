import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRowerAddComponent } from './tracking-rower-add.component';

describe('TrackingRowerAddComponent', () => {
  let component: TrackingRowerAddComponent;
  let fixture: ComponentFixture<TrackingRowerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingRowerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRowerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
