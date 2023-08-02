import { Component, OnInit } from '@angular/core';
//import { Appointmentdetails } from './appointmentdetails';
//import { AppointmentdetailsService } from '../appointmentdetails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentRecord } from '../appointment-record';
import { Doctor } from '../doctor';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service'
@Component({
  selector: 'app-appoitment-details',
  templateUrl: './appoitment-details.component.html',
  styleUrls: ['./appoitment-details.component.css']
})
export class AppoitmentDetailsComponent implements OnInit {
  public sessionStorage = sessionStorage;
  receptionistId: number;
  recordId: number;
  appointmentdetails: AppointmentRecord[];
  receptionist1: Receptionist;
  doctor1: Doctor[];
  object: any[];
  //object = this.appointmentdetails.concat(this.doctor1);
  // doctorId: number;
  //public mySentences: Array<string>;
  constructor(private appointmentdrtailsservice: ReceptionistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("rId")){
      this.receptionistId = this.route.snapshot.params['receptionistId'];
    }else{
      this.router.navigate(['LoginRecept']);
    }
    
//this.receptionistId = this.route.snapshot.params['receptionistId'];
    this.appointmentdrtailsservice.getAppointmentDetails(this.receptionistId).subscribe(data => {
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






    /*this.appointmentdrtailsservice.getDoctorDetails(this.receptionistId).subscribe(data1 => {
      console.log(data1);
      console.log("====Doctor Details====");
      this.doctor1 = data1;
      //console.log(this.doctor);

    });*/

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
      this.appointmentdrtailsservice.getAppointmentDetails(this.receptionistId).subscribe(data => {
        console.log(data);
        this.appointmentdetails = data;

        // this.doctor1 = this.appointmentdetails.
        // data.forEach()
      });
      //this.gotoAppointmentDetailsDel();
    });
  }
}
