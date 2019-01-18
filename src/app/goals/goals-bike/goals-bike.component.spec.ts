import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsBikeComponent } from './goals-bike.component';

describe('GoalsBikeComponent', () => {
  let component: GoalsBikeComponent;
  let fixture: ComponentFixture<GoalsBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
