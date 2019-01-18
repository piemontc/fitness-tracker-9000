import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsEllipticalComponent } from './goals-elliptical.component';

describe('GoalsEllipticalComponent', () => {
  let component: GoalsEllipticalComponent;
  let fixture: ComponentFixture<GoalsEllipticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsEllipticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsEllipticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
