import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddevenementComponent } from './addevenement.component';

describe('AddevenementComponent', () => {
  let component: AddevenementComponent;
  let fixture: ComponentFixture<AddevenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddevenementComponent]
    });
    fixture = TestBed.createComponent(AddevenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
