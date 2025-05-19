import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcertificatComponent } from './addcertificat.component';

describe('AddcertificatComponent', () => {
  let component: AddcertificatComponent;
  let fixture: ComponentFixture<AddcertificatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcertificatComponent]
    });
    fixture = TestBed.createComponent(AddcertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
