import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailevenementComponent } from './detailevenement.component';

describe('DetailevenementComponent', () => {
  let component: DetailevenementComponent;
  let fixture: ComponentFixture<DetailevenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailevenementComponent]
    });
    fixture = TestBed.createComponent(DetailevenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
