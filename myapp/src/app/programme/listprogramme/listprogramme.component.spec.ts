import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprogrammeComponent } from './listprogramme.component';

describe('ListprogrammeComponent', () => {
  let component: ListprogrammeComponent;
  let fixture: ComponentFixture<ListprogrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListprogrammeComponent]
    });
    fixture = TestBed.createComponent(ListprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
