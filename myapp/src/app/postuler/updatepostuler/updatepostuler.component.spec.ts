import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepostulerComponent } from './updatepostuler.component';

describe('UpdatepostulerComponent', () => {
  let component: UpdatepostulerComponent;
  let fixture: ComponentFixture<UpdatepostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepostulerComponent]
    });
    fixture = TestBed.createComponent(UpdatepostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
