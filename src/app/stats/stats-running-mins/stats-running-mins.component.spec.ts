import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRunningMinsComponent } from './stats-running-mins.component';

describe('StatsRunningMinsComponent', () => {
  let component: StatsRunningMinsComponent;
  let fixture: ComponentFixture<StatsRunningMinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRunningMinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRunningMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
