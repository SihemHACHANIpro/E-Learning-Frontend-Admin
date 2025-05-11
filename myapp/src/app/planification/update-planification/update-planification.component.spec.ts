import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlanificationComponent } from './update-planification.component';

describe('UpdatePlanificationComponent', () => {
  let component: UpdatePlanificationComponent;
  let fixture: ComponentFixture<UpdatePlanificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePlanificationComponent]
    });
    fixture = TestBed.createComponent(UpdatePlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
