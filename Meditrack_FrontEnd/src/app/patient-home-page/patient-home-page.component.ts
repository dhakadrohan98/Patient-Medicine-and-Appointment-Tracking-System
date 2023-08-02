import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { MedicalReport } from '../medical-report';
import { Patient } from '../patient';
@Component({
  selector: 'app-patient-home-page',
  templateUrl: './patient-home-page.component.html',
  styleUrls: ['./patient-home-page.component.css']
})
export class PatientHomePageComponent implements OnInit {
  pid2:number;
  patient:Patient=new Patient();
  medicalreport1:MedicalReport=new MedicalReport;
  public sessionStorage = sessionStorage;
  constructor(private patientService: PatientService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.pid2 = this.route.snapshot.params['pid2'];
    }else{
      this.router.navigate(['/PLogin']);
    }
    console.log(sessionStorage.getItem("ppid1"));
    //this.patient=JSON.parse(sessionStorage.getItem("ppid1"))
  }

  createMedicalReport(){
    this.patientService.getMedicalReport(this.pid2).subscribe(data1 =>{
      console.log(data1);
      console.log("=====llllllllllll=====lllllll===");
      this.medicalreport1 = data1;
      //console.log(this.medicalreport1.reportId);
      //console.log(this.medicalreport1.doctorName);
      if(data1==null){
        this.router.navigate(['/PCreateMedicalReport/',sessionStorage.getItem('ppid')]);
      }else{
        this.router.navigate(['/PatientHomePage/',sessionStorage.getItem('ppid')]);
      }
  },
  error => console.log(error));    
  

    //this.router.navigate(['/PCreateMedicalReport/',sessionStorage.getItem('ppid')]);
  }
  viewMedicalReport(){
    this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);
  }
  addMedicineDetails(){
    this.router.navigate(['/addMedicine/',sessionStorage.getItem('ppid')]);
  }
  processLogout() {
    sessionStorage.removeItem('ppid');
    sessionStorage.removeItem('pfname');
    sessionStorage.removeItem('plname');
    this.router.navigate(['PLogin']);
  }

  reqForAppointment(){
    console.log("=======");
    this.router.navigate(['/reqAppointment/',sessionStorage.getItem('ppid')]);
  }
}
