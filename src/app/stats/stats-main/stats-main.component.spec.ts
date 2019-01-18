import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMainComponent } from './stats-main.component';

describe('StatsMainComponent', () => {
  let component: StatsMainComponent;
  let fixture: ComponentFixture<StatsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
