import { Component, OnInit } from '@angular/core';
//import { Patient } from '../patient';
import { MedicalReport } from '../medical-report';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { Receptionist } from '../receptionist';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-pcreate-medical-report',
  templateUrl: './pcreate-medical-report.component.html',
  styleUrls: ['./pcreate-medical-report.component.css']
})
export class PCreateMedicalReportComponent implements OnInit {
  pid2:number;
  doctor:Doctor[];
  receptionist:Receptionist[];
  medicalreport2:MedicalReport=new MedicalReport();
  constructor(private patientService: PatientService,private route: ActivatedRoute,private httpClient: HttpClient,
    private router:Router) { }
    selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  ngOnInit(): void {
    //medicalreport2:MedicalReport;
    if(sessionStorage.getItem("ppid")){
      this.pid2 = this.route.snapshot.params['pid2'];
    }else{
      this.router.navigate(['/PLogin']);
    }
    this.patientService.getDoctorList().subscribe(data=> {
      this.doctor = data;
    });

    this.patientService.getReceptionistList().subscribe(data=> {
      this.receptionist = data;
    });
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    let baseURL1 = "http://localhost:8080/MediTrackProject1/uploadPIm";
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(`${baseURL1}/${this.pid2}`, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log("succes");
          this.message = 'Image uploaded successfully';
        } else {
          console.log("fail");
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  saveMedicalReport(){
   
    this.patientService.createMedicalReport(this.pid2,this.medicalreport2).subscribe(data => {
    console.log(data);
    this.onUpload();
    this.goTomedicalReport();
    },
    error => console.log(error));
  }

    goTomedicalReport(){
      this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);
    }
  
    onSubmit(){
    this.saveMedicalReport();
  }
}
