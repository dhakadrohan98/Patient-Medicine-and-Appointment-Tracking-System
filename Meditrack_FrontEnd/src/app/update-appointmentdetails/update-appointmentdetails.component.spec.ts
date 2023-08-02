import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentdetailsComponent } from './update-appointmentdetails.component';

describe('UpdateAppointmentdetailsComponent', () => {
  let component: UpdateAppointmentdetailsComponent;
  let fixture: ComponentFixture<UpdateAppointmentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppointmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
