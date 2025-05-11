import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprojetComponent } from './detailprojet.component';

describe('DetailprojetComponent', () => {
  let component: DetailprojetComponent;
  let fixture: ComponentFixture<DetailprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailprojetComponent]
    });
    fixture = TestBed.createComponent(DetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
