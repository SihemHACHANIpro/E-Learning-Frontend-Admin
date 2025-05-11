import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListevenementComponent } from './listevenement.component';

describe('ListevenementComponent', () => {
  let component: ListevenementComponent;
  let fixture: ComponentFixture<ListevenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListevenementComponent]
    });
    fixture = TestBed.createComponent(ListevenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
