import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRunningComponent } from './stats-running.component';

describe('StatsRunningComponent', () => {
  let component: StatsRunningComponent;
  let fixture: ComponentFixture<StatsRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
