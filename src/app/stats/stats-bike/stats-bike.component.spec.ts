import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBikeComponent } from './stats-bike.component';

describe('StatsBikeComponent', () => {
  let component: StatsBikeComponent;
  let fixture: ComponentFixture<StatsBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
