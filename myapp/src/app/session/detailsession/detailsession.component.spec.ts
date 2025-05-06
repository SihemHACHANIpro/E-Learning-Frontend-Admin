import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsessionComponent } from './detailsession.component';

describe('DetailsessionComponent', () => {
  let component: DetailsessionComponent;
  let fixture: ComponentFixture<DetailsessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsessionComponent]
    });
    fixture = TestBed.createComponent(DetailsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
