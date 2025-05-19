import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecertificatComponent } from './updatecertificat.component';

describe('UpdatecertificatComponent', () => {
  let component: UpdatecertificatComponent;
  let fixture: ComponentFixture<UpdatecertificatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecertificatComponent]
    });
    fixture = TestBed.createComponent(UpdatecertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
