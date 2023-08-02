import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppointmentRecord } from '../appointment-record';
import { Doctor } from '../doctor';
import { Receptionist } from '../receptionist';
import { Patient } from '../patient';

@Component({
  selector: 'app-req-for-appointment',
  templateUrl: './req-for-appointment.component.html',
  styleUrls: ['./req-for-appointment.component.css']
})
export class ReqForAppointmentComponent implements OnInit {
  pid2:number;
  patient:Patient=new Patient();
  doctor:Doctor[];
  receptionist:Receptionist[];
  appointmentrecord:AppointmentRecord=new AppointmentRecord();
  constructor(private patientService: PatientService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.pid2 = this.route.snapshot.params['pid2'];
    }else{
      this.router.navigate(['/PLogin']);
    }
    //this.pid2 = this.route.snapshot.params['pid2'];
    this.patientService.getDoctorList().subscribe(data=> {
      this.doctor = data;
    });

    this.patientService.getReceptionistList().subscribe(data=> {
      this.receptionist = data;
    });

    this.patientService.getPatientById(this.pid2).subscribe(data=> {
      this.patient = data;
      //this.appointmentrecord.patientName=data.firtName;
      this.appointmentrecord.patientName=this.patient.firtName;
    });
  }

  reqForAppointment(){
   // this.appointmentrecord.patientName=this.patient.firtName;
    this.patientService.reqForAppointment(this.pid2,this.appointmentrecord).subscribe(data => {
      console.log(data);
      this.goToHomePage();
      },
      error => console.log(error));
  }

  goToHomePage(){
    console.log("=66666---");
    this.router.navigate(['/PatientHomePage/',sessionStorage.getItem('ppid')]);
  }
  onSubmit(){
    this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);
  }
}
