import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChallengeEllipticalComponent } from './weekly-challenge-elliptical.component';

describe('WeeklyChallengeEllipticalComponent', () => {
  let component: WeeklyChallengeEllipticalComponent;
  let fixture: ComponentFixture<WeeklyChallengeEllipticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyChallengeEllipticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyChallengeEllipticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
