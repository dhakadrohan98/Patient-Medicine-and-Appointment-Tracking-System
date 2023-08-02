import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MedicalReport } from '../medical-report';
@Component({
  selector: 'app-pupdate-medical-report',
  templateUrl: './pupdate-medical-report.component.html',
  styleUrls: ['./pupdate-medical-report.component.css']
})
export class PUpdateMedicalReportComponent implements OnInit {
  pid2:number;
  reportId:number;
  medicalreport3:MedicalReport=new MedicalReport();
  constructor(private patientservice: PatientService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.pid2 = this.route.snapshot.params['pid2'];
    }else{
      this.router.navigate(['/PLogin']);
    }
    this.reportId= this.route.snapshot.params['reportId'];
    this.patientservice.getMedicalReportByRepId(this.reportId).subscribe(data =>{
     // console.log(data);
      this.medicalreport3= data;
      //console.log(this.medicalreport3);
    },
      error => console.log(error));
  }

  updateMedicalReport(){
    console.log("==========");
    this.patientservice.updateMedicalReport(this.reportId,this.medicalreport3).subscribe(data => {
      console.log();
      //this.pprescription = new PPrescription();
      this.goToViewMedicalReport();

    },
     error => console.log(error));

  }

  onSubmit(){

  }

  goToViewMedicalReport(){
    console.log("11111111");
    this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);
  }

}
