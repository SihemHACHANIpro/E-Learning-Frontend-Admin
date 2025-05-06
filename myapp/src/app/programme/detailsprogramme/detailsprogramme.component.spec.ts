import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprogrammeComponent } from './detailsprogramme.component';

describe('DetailsprogrammeComponent', () => {
  let component: DetailsprogrammeComponent;
  let fixture: ComponentFixture<DetailsprogrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsprogrammeComponent]
    });
    fixture = TestBed.createComponent(DetailsprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
