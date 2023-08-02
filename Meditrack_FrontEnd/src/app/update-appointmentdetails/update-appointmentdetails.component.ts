import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReceptionistService } from '../receptionist.service';
import { AppointmentRecord } from '../appointment-record';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-update-appointmentdetails',
  templateUrl: './update-appointmentdetails.component.html',
  styleUrls: ['./update-appointmentdetails.component.css']
})
export class UpdateAppointmentdetailsComponent implements OnInit {
  public sessionStorage = sessionStorage;
  recordId: number;
  doctor: Doctor = new Doctor();
  appointmentrecord: AppointmentRecord = new AppointmentRecord();
  constructor(private appointmentdrtailsservice: ReceptionistService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("rId")){
      //this.receptionistId = this.route.snapshot.params['receptionistId'];
    }else{
      this.router.navigate(['LoginRecept']);
    }
    this.recordId = this.route.snapshot.params['recordId'];
    this.appointmentdrtailsservice.getAppointmentSDetails(this.recordId).subscribe(data => {
      console.log(data);
      this.appointmentrecord = data;
      this.doctor.doctorId = this.appointmentrecord.doctorId;
      console.log(this.doctor.doctorId);
      this.appointmentdrtailsservice.getDoctorSDetails(this.doctor.doctorId).subscribe(data => {
        console.log(data);
        this.doctor = data;
      });
    },
      error => console.log(error));
  }

  saveAppointmentDetails() {
    this.appointmentdrtailsservice.updateAppointmentSDetails(this.recordId, this.appointmentrecord).subscribe(data => {
      console.log(this.appointmentrecord.appointmentStatus);

      //this.appointmentrecord = new AppointmentRecord();
      this.sendEmail();
      this.appointmentrecord = new AppointmentRecord();
      this.gotoAppoitmentDetails();

    },
      error => console.log(error));
  }

  gotoAppoitmentDetails() {
    this.router.navigate(['/AppointmentDetails', sessionStorage.getItem('rId')]);
  }

  sendEmail() {
    this.appointmentdrtailsservice.AppointmentConfirmationEmail(this.recordId, this.appointmentrecord).subscribe(data => {
      console.log(data);
    });
  }

}
