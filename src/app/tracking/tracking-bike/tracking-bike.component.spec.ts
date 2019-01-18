import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingBikeComponent } from './tracking-bike.component';

describe('TrackingBikeComponent', () => {
  let component: TrackingBikeComponent;
  let fixture: ComponentFixture<TrackingBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
