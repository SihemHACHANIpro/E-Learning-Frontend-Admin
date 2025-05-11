import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojetComponent } from './addprojet.component';

describe('AddprojetComponent', () => {
  let component: AddprojetComponent;
  let fixture: ComponentFixture<AddprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprojetComponent]
    });
    fixture = TestBed.createComponent(AddprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
