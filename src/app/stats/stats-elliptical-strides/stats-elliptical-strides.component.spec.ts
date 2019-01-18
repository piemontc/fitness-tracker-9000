import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEllipticalStridesComponent } from './stats-elliptical-strides.component';

describe('StatsEllipticalStridesComponent', () => {
  let component: StatsEllipticalStridesComponent;
  let fixture: ComponentFixture<StatsEllipticalStridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsEllipticalStridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsEllipticalStridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
