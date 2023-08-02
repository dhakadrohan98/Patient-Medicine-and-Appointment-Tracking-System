import { Component, OnInit } from '@angular/core';
import { PatientAuthenticationService } from '../patient-authentication.service';
import { Router } from '@angular/router';
import { PatientAuthentication } from '../patient-authentication';

@Component({
  selector: 'app-patient-authentication-key',
  templateUrl: './patient-authentication-key.component.html',
  styleUrls: ['./patient-authentication-key.component.css']
})
export class PatientAuthenticationKeyComponent implements OnInit {
  patientauthentication: PatientAuthentication = new PatientAuthentication();
  constructor(private patientauthenticationService: PatientAuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }
    onSubmit(){
      this.patientauthenticationService.patientAuthKey(this.patientauthentication).subscribe(data=>{
        this.sendKeyByMail();
        this.goToLoginAuth();
      },
      error => console.log(error));
    }

    goToLoginAuth(){
      this.router.navigate(['/PAuthentication']);
    }

    sendKeyByMail(){
      this.patientauthenticationService.sendKeyByMail(this.patientauthentication).subscribe(data=>{

      });
    }
}
