import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBikeMinsComponent } from './stats-bike-mins.component';

describe('StatsBikeMinsComponent', () => {
  let component: StatsBikeMinsComponent;
  let fixture: ComponentFixture<StatsBikeMinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsBikeMinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBikeMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
