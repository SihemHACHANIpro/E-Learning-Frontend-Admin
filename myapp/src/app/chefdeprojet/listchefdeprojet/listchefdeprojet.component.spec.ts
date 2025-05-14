import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchefdeprojetComponent } from './listchefdeprojet.component';

describe('ListchefdeprojetComponent', () => {
  let component: ListchefdeprojetComponent;
  let fixture: ComponentFixture<ListchefdeprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListchefdeprojetComponent]
    });
    fixture = TestBed.createComponent(ListchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
