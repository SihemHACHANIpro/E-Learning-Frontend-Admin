import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostulerComponent } from './addpostuler.component';

describe('AddpostulerComponent', () => {
  let component: AddpostulerComponent;
  let fixture: ComponentFixture<AddpostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpostulerComponent]
    });
    fixture = TestBed.createComponent(AddpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
