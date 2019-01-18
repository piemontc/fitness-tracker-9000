import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsRowerComponent } from './goals-rower.component';

describe('GoalsRowerComponent', () => {
  let component: GoalsRowerComponent;
  let fixture: ComponentFixture<GoalsRowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsRowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsRowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
