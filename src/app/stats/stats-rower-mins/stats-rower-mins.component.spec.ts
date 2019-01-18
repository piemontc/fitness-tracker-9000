import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRowerMinsComponent } from './stats-rower-mins.component';

describe('StatsRowerMinsComponent', () => {
  let component: StatsRowerMinsComponent;
  let fixture: ComponentFixture<StatsRowerMinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRowerMinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRowerMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
