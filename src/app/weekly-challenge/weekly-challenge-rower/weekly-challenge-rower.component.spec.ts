import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChallengeRowerComponent } from './weekly-challenge-rower.component';

describe('WeeklyChallengeRowerComponent', () => {
  let component: WeeklyChallengeRowerComponent;
  let fixture: ComponentFixture<WeeklyChallengeRowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyChallengeRowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyChallengeRowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
