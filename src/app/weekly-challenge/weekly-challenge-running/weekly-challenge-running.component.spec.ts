import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChallengeRunningComponent } from './weekly-challenge-running.component';

describe('WeeklyChallengeRunningComponent', () => {
  let component: WeeklyChallengeRunningComponent;
  let fixture: ComponentFixture<WeeklyChallengeRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyChallengeRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyChallengeRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
