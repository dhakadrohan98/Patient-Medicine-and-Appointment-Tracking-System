import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  public Uinvalid=false;
  patient: any = new Patient();
  patient1:Patient;
  patient2:Patient;
  constructor(private patientService: PatientService,
    private router:Router) { }

  ngOnInit(): void {
  }

  savePatient1(){
    //let emailP = (<HTMLInputElement>document.getElementById('emailP')).value;
    //let passwordP = (<HTMLInputElement>document.getElementById('passwordP')).value;
    const result:any=this.patientService.patientLogin(this.patient).subscribe(data => {
      this.patient=data;
       sessionStorage.setItem("ppid",this.patient.pid2);
      sessionStorage.setItem("pfname",this.patient.firtName);
      sessionStorage.setItem("plname",this.patient.lastName);
      console.log(sessionStorage.getItem("ppid"));
      console.log(sessionStorage.getItem("pfname"));
      console.log(sessionStorage.getItem("plname"));
     
      if(sessionStorage.getItem("ppid")=='0'){
        this.Uinvalid=true;
        window.alert("Inavlid Username or Password");
        this.router.navigate(['/PLogin']);
      }else{
        this.goToHomePage();
      }
      
    },
    error => this.Uinvalid=true);
  }

    goToHomePage(){
      this.router.navigate(['/PatientHomePage/',sessionStorage.getItem('ppid')]);
    }
  
    onSubmit(){
    this.savePatient1();
  }  
}
