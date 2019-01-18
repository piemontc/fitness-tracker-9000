import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEllipticalMinsComponent } from './stats-elliptical-mins.component';

describe('StatsEllipticalMinsComponent', () => {
  let component: StatsEllipticalMinsComponent;
  let fixture: ComponentFixture<StatsEllipticalMinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsEllipticalMinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsEllipticalMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
