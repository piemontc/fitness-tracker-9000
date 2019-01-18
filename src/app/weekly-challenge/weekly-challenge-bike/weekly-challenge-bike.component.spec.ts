import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChallengeBikeComponent } from './weekly-challenge-bike.component';

describe('WeeklyChallengeBikeComponent', () => {
  let component: WeeklyChallengeBikeComponent;
  let fixture: ComponentFixture<WeeklyChallengeBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyChallengeBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyChallengeBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
