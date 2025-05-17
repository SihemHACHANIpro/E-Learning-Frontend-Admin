import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletachefdeprojetComponent } from './deletachefdeprojet.component';

describe('DeletachefdeprojetComponent', () => {
  let component: DeletachefdeprojetComponent;
  let fixture: ComponentFixture<DeletachefdeprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletachefdeprojetComponent]
    });
    fixture = TestBed.createComponent(DeletachefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
