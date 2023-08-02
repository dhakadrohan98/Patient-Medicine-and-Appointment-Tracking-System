import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentRecord } from '../appointment-record';
import { Doctor } from '../doctor';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service'
@Component({
  selector: 'app-requested-appointments',
  templateUrl: './requested-appointments.component.html',
  styleUrls: ['./requested-appointments.component.css']
})
export class RequestedAppointmentsComponent implements OnInit {
  public sessionStorage = sessionStorage;
  receptionistId: number;
  recordId: number;
  appointmentdetails: AppointmentRecord[];
  receptionist1: Receptionist;
  doctor1: Doctor[];
  object: any[];
  constructor(private appointmentdrtailsservice: ReceptionistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("rId")){
      this.receptionistId = this.route.snapshot.params['receptionistId'];
    }else{
      this.router.navigate(['LoginRecept']);
    }
    //this.receptionistId = this.route.snapshot.params['receptionistId'];
    this.appointmentdrtailsservice.getRequestedAppointmentDetails(this.receptionistId).subscribe(data => {
      console.log(data);
      this.appointmentdetails = data;

      // this.doctor1 = this.appointmentdetails.
      // data.forEach()
    },
      error => console.log(error));

    this.appointmentdrtailsservice.getReceptionistDetails(this.receptionistId).subscribe(data1 => {
      console.log(data1);
      console.log("====Appointment Details====");
      this.receptionist1 = data1;
      console.log(this.receptionist1.receptionistName);
    });
  }

  processLogout() {

    sessionStorage.removeItem('rId');
    sessionStorage.removeItem('rName');
    this.router.navigate(['LoginRecept']);
  }
  gotoAppointmentDetailsDel() {
    this.router.navigate(['/AppointmentDetails', sessionStorage.getItem('rId')]);
  }
  deleteRecord(recordId: number) {
    this.appointmentdrtailsservice.deleteRecord(recordId).subscribe(data => {
      console.log(data);
      this.appointmentdrtailsservice.getRequestedAppointmentDetails(this.receptionistId).subscribe(data => {
        console.log(data);
        this.appointmentdetails = data;

        // this.doctor1 = this.appointmentdetails.
        // data.forEach()
      });
      //this.gotoAppointmentDetailsDel();
    });
  }

  /*goToupdateMedicine(medicineId:number){
    this.router.navigate(['updateSmedicineR',medicineId]);
  }*/
  gotoUpdateDetails(recordId: number) {
    this.router.navigate(['updateAppointmentRecord', recordId]);
  }

}
