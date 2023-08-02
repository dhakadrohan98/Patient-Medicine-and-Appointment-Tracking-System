import { Component, OnInit } from '@angular/core';
import { PatientAuthenticationService } from '../patient-authentication.service';
import { Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-pat-forgot-password',
  templateUrl: './pat-forgot-password.component.html',
  styleUrls: ['./pat-forgot-password.component.css']
})
export class PatForgotPasswordComponent implements OnInit {
  patient: Patient= new Patient();
  constructor(private patientauthenticationService: PatientAuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.patientauthenticationService.checkPatientEmailId(this.patient).subscribe(data=>{
      this.patient=data;
      console.log("check mail");
    });
    
    if(this.patient.pid2!=0){
      this.patientauthenticationService.receivePasswordByMail(this.patient).subscribe(data=>{
      });
      console.log("send mail");
      this.router.navigate(['PLogin']);
    }else{
      console.log("no matching mail");
      this.router.navigate(['PForgotPass']);
    }
  }

}
