import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanificationComponent } from './addplanification.component';

describe('AddplanificationComponent', () => {
  let component: AddplanificationComponent;
  let fixture: ComponentFixture<AddplanificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddplanificationComponent]
    });
    fixture = TestBed.createComponent(AddplanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
