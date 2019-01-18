import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsRunningComponent } from './goals-running.component';

describe('GoalsRunningComponent', () => {
  let component: GoalsRunningComponent;
  let fixture: ComponentFixture<GoalsRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
