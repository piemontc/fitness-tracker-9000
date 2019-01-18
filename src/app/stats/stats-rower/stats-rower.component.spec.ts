import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRowerComponent } from './stats-rower.component';

describe('StatsRowerComponent', () => {
  let component: StatsRowerComponent;
  let fixture: ComponentFixture<StatsRowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
