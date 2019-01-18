import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFullComponent } from './search-full.component';

describe('SearchFullComponent', () => {
  let component: SearchFullComponent;
  let fixture: ComponentFixture<SearchFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
