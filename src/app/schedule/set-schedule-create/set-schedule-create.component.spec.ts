import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetScheduleCreateComponent } from './set-schedule-create.component';

describe('SetScheduleCreateComponent', () => {
  let component: SetScheduleCreateComponent;
  let fixture: ComponentFixture<SetScheduleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetScheduleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetScheduleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
