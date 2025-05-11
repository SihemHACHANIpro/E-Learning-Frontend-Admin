import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterapportComponent } from './updaterapport.component';

describe('UpdaterapportComponent', () => {
  let component: UpdaterapportComponent;
  let fixture: ComponentFixture<UpdaterapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdaterapportComponent]
    });
    fixture = TestBed.createComponent(UpdaterapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
