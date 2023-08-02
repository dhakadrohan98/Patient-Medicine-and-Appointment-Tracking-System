import { Component, OnInit } from '@angular/core';
import { PatientAuthenticationService } from '../patient-authentication.service';
import { Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-pat-change-password',
  templateUrl: './pat-change-password.component.html',
  styleUrls: ['./pat-change-password.component.css']
})
export class PatChangePasswordComponent implements OnInit {
  patient: Patient= new Patient();
  constructor(private patientauthenticationService: PatientAuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
  changePass(){
    this.patientauthenticationService.checkPEmailPass(this.patient).subscribe(data=>{
      this.patient=data;
      console.log(this.patient);
      console.log("check maail and pass");
      if(this.patient.pid2!=0){
        let newpass = (<HTMLInputElement>document.getElementById('newpass')).value;
        this.patient.password=newpass;
        this.patientauthenticationService.changePPass(this.patient).subscribe(data=>{
        });
        console.log("change pass");
        this.router.navigate(['PLogin']);
      }else{
        console.log("no matching mail");
        window.alert("Password or email is wrong");
        this.router.navigate(['PChangePass']);
      }
    });
    
   
  }
}
