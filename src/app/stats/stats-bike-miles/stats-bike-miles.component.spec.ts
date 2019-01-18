import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBikeMilesComponent } from './stats-bike-miles.component';

describe('StatsBikeMilesComponent', () => {
  let component: StatsBikeMilesComponent;
  let fixture: ComponentFixture<StatsBikeMilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsBikeMilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBikeMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
