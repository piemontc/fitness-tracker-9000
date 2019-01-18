import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingBikeAddComponent } from './tracking-bike-add.component';

describe('TrackingBikeAddComponent', () => {
  let component: TrackingBikeAddComponent;
  let fixture: ComponentFixture<TrackingBikeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingBikeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingBikeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
