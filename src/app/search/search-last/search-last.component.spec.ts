import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLastComponent } from './search-last.component';

describe('SearchLastComponent', () => {
  let component: SearchLastComponent;
  let fixture: ComponentFixture<SearchLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
