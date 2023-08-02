import { Component, OnInit } from '@angular/core';
import { PPrescription } from '../pprescription';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MedicalReport } from '../medical-report';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-pview-medical-report',
  templateUrl: './pview-medical-report.component.html',
  styleUrls: ['./pview-medical-report.component.css']
})
export class PViewMedicalReportComponent implements OnInit {
  public sessionStorage = sessionStorage;
  pid2:number;
  medicineId:number;
  pprescription:PPrescription[];
  pprescription1:PPrescription=new PPrescription;
  medicalreport1:MedicalReport;
  constructor(private patientService: PatientService, private route: ActivatedRoute,private httpClient: HttpClient,
    private router:Router) { }
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.pid2 = this.route.snapshot.params['pid2'];
    }else{
      this.router.navigate(['/PLogin']);
    }
    let baseURL1 = "http://localhost:8080/MediTrackProject1/getPI";
    this.httpClient.get(`${baseURL1}/${this.pid2}`)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  
    this.patientService.getMedicineDetails2(this.pid2).subscribe(data =>{
      console.log(data);
      this.pprescription = data;
    },
     
      error => console.log(error));

      this.patientService.getMedicalReport(this.pid2).subscribe(data1 =>{
        console.log(data1);
        console.log("=====medical=====");
        this.medicalreport1 = data1;
        console.log(this.medicalreport1.doctorName);
    },
    error => console.log(error));
}

goToupdateMedicine(medicineId:number){
  this.router.navigate(['updateSmedicineR',medicineId]);
}

addMedicineDetails(){
  this.router.navigate(['/addMedicine/',sessionStorage.getItem('ppid')]);
}

DMedicineRecord(medicineId: number) {
  this.patientService.DMedicineRecord1(medicineId,this.pid2,this.pprescription1).subscribe(data => {
    console.log(data);
    console.log("1111111");
    this.patientService.getMedicineDetails2(this.pid2).subscribe(data => {
      console.log(data);
      console.log("3333333");
      this.pprescription = data;
    });
  });
}

goToHomePage(){
  this.router.navigate(['/PatientHomePage/',sessionStorage.getItem('ppid')]);
}

processLogout() {
  sessionStorage.removeItem('ppid');
  sessionStorage.removeItem('pfname');
  sessionStorage.removeItem('plname');
  this.router.navigate(['PLogin']);
}
updateReport(reportId:number){
  this.router.navigate(['updateMedicalR',reportId]);
}

}
