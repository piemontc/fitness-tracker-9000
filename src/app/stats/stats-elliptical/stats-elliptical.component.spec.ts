import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEllipticalComponent } from './stats-elliptical.component';

describe('StatsEllipticalComponent', () => {
  let component: StatsEllipticalComponent;
  let fixture: ComponentFixture<StatsEllipticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsEllipticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsEllipticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
