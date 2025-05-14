import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministrateurComponent } from './list-administrateur.component';

describe('ListAdministrateurComponent', () => {
  let component: ListAdministrateurComponent;
  let fixture: ComponentFixture<ListAdministrateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAdministrateurComponent]
    });
    fixture = TestBed.createComponent(ListAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
