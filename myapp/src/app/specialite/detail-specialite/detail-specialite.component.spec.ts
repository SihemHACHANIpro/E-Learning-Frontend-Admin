import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecialiteComponent } from './detail-specialite.component';

describe('DetailSpecialiteComponent', () => {
  let component: DetailSpecialiteComponent;
  let fixture: ComponentFixture<DetailSpecialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSpecialiteComponent]
    });
    fixture = TestBed.createComponent(DetailSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
