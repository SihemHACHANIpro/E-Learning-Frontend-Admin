import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchefdeprojetComponent } from './addchefdeprojet.component';

describe('AddchefdeprojetComponent', () => {
  let component: AddchefdeprojetComponent;
  let fixture: ComponentFixture<AddchefdeprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddchefdeprojetComponent]
    });
    fixture = TestBed.createComponent(AddchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
