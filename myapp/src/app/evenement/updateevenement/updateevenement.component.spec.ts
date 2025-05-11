import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateevenementComponent } from './updateevenement.component';

describe('UpdateevenementComponent', () => {
  let component: UpdateevenementComponent;
  let fixture: ComponentFixture<UpdateevenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateevenementComponent]
    });
    fixture = TestBed.createComponent(UpdateevenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
