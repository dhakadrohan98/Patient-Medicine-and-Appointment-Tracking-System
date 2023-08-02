import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqForAppointmentComponent } from './req-for-appointment.component';

describe('ReqForAppointmentComponent', () => {
  let component: ReqForAppointmentComponent;
  let fixture: ComponentFixture<ReqForAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqForAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqForAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
