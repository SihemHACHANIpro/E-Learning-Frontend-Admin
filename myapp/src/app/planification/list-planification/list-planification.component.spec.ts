import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanificationComponent } from './list-planification.component';

describe('ListPlanificationComponent', () => {
  let component: ListPlanificationComponent;
  let fixture: ComponentFixture<ListPlanificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPlanificationComponent]
    });
    fixture = TestBed.createComponent(ListPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
