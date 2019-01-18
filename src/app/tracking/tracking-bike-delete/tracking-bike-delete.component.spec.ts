import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingBikeDeleteComponent } from './tracking-bike-delete.component';

describe('TrackingBikeDeleteComponent', () => {
  let component: TrackingBikeDeleteComponent;
  let fixture: ComponentFixture<TrackingBikeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingBikeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingBikeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
