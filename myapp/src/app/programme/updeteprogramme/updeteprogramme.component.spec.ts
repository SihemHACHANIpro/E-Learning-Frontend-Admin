import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeteprogrammeComponent } from './updeteprogramme.component';

describe('UpdeteprogrammeComponent', () => {
  let component: UpdeteprogrammeComponent;
  let fixture: ComponentFixture<UpdeteprogrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdeteprogrammeComponent]
    });
    fixture = TestBed.createComponent(UpdeteprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
