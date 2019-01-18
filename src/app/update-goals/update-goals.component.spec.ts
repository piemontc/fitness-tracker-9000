import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatGoalsComponent } from './update-goals.component';

describe('UpdatGoalsComponent', () => {
  let component: UpdatGoalsComponent;
  let fixture: ComponentFixture<UpdatGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
