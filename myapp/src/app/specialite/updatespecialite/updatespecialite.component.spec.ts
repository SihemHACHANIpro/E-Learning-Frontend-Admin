import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespecialiteComponent } from './updatespecialite.component';

describe('UpdatespecialiteComponent', () => {
  let component: UpdatespecialiteComponent;
  let fixture: ComponentFixture<UpdatespecialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatespecialiteComponent]
    });
    fixture = TestBed.createComponent(UpdatespecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
