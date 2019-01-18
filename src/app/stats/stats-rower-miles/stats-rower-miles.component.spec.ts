import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRowerMilesComponent } from './stats-rower-miles.component';

describe('StatsRowerMilesComponent', () => {
  let component: StatsRowerMilesComponent;
  let fixture: ComponentFixture<StatsRowerMilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRowerMilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRowerMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
