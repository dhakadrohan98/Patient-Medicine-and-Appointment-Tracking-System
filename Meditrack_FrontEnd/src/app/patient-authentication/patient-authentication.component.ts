import { Component, OnInit } from '@angular/core';
import { PatientAuthenticationService } from '../patient-authentication.service';
import { Router } from '@angular/router';
import { PatientAuthentication } from '../patient-authentication';

@Component({
  selector: 'app-patient-authentication',
  templateUrl: './patient-authentication.component.html',
  styleUrls: ['./patient-authentication.component.css']
})
export class PatientAuthenticationComponent implements OnInit {
  patientauthentication: PatientAuthentication = new PatientAuthentication();
  constructor(private patientauthenticationService: PatientAuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }
  title = 'materialApp'; 
  favoriteSeason: string;
  seasons: string[] = ['Femal', 'Male'];
  

  savePatient2(){
    this.patientauthenticationService.patientAuth(this.patientauthentication).subscribe(data => {
      console.log(data);
      this.patientauthentication=data;
      if(this.patientauthentication.pAId!=0){
        this.goToPatientRegisteration();
      }else{
        this.router.navigate(['/PAuthentication']);
      }
      
    },
    error => console.log(error));
  }

    goToPatientRegisteration(){
      console.log("=========");
      this.router.navigate(['/PRegistration']);
    }
  
    onSubmit(){
    console.log(this.patientauthentication);
    console.log("submit=======");
    this.savePatient2();
  }  
}
