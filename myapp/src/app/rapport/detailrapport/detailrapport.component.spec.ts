import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrapportComponent } from './detailrapport.component';

describe('DetailrapportComponent', () => {
  let component: DetailrapportComponent;
  let fixture: ComponentFixture<DetailrapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailrapportComponent]
    });
    fixture = TestBed.createComponent(DetailrapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
