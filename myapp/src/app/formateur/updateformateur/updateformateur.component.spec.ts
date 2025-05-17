import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformateurComponent } from './updateformateur.component';

describe('UpdateformateurComponent', () => {
  let component: UpdateformateurComponent;
  let fixture: ComponentFixture<UpdateformateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateformateurComponent]
    });
    fixture = TestBed.createComponent(UpdateformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
