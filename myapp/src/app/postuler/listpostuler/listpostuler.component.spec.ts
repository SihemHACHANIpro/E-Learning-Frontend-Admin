import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpostulerComponent } from './listpostuler.component';

describe('ListpostulerComponent', () => {
  let component: ListpostulerComponent;
  let fixture: ComponentFixture<ListpostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpostulerComponent]
    });
    fixture = TestBed.createComponent(ListpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
