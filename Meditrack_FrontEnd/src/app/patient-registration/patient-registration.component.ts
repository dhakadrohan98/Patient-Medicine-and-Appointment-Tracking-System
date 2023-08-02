import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { PatientAuthentication } from '../patient-authentication';
import { PatientAuthenticationService } from '../patient-authentication.service';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  patient: Patient = new Patient();
  patientAuthentication: PatientAuthentication= new PatientAuthentication();
  constructor(private patientService: PatientService,private patientauthenticationService: PatientAuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  savePatient(){
    let confirmpass=(<HTMLInputElement>document.getElementById('confirmPass')).value;
    this.patientauthenticationService.checkMail(this.patient).subscribe(data=>{
      this.patientAuthentication=data;
      console.log(this.patientAuthentication.emailId);
      console.log(data);
      console.log("comp.ts");
    }, errors=>console.log("errors"));
    if(confirmpass!=this.patient.password){
      window.alert("password and confirm password not same");
    }else 
    if(this.patientAuthentication.pAId==0){
       window.alert("EmailId Not Exist");
      this.router.navigate(['/PRegistration']);
    }else{
      this.patientService.createPatient(this.patient).subscribe(data => {
        console.log(data);
        this.router.navigate(['/PLogin']); });
     }
    }
  onSubmit(){
    this.savePatient();
  }
}
