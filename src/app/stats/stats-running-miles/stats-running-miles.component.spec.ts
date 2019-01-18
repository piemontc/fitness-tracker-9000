import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRunningMilesComponent } from './stats-running-miles.component';

describe('StatsRunningMilesComponent', () => {
  let component: StatsRunningMilesComponent;
  let fixture: ComponentFixture<StatsRunningMilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRunningMilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRunningMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
