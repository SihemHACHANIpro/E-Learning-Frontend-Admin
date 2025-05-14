import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailutilisateurComponent } from './detailutilisateur.component';

describe('DetailutilisateurComponent', () => {
  let component: DetailutilisateurComponent;
  let fixture: ComponentFixture<DetailutilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailutilisateurComponent]
    });
    fixture = TestBed.createComponent(DetailutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
