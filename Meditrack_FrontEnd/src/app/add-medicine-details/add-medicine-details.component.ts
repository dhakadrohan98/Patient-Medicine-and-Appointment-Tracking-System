import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { PPrescription } from '../pprescription';
@Component({
  selector: 'app-add-medicine-details',
  templateUrl: './add-medicine-details.component.html',
  styleUrls: ['./add-medicine-details.component.css']
})
export class AddMedicineDetailsComponent implements OnInit {
  pid2:number;
  pprescription:PPrescription= new PPrescription();
  constructor(private patientService: PatientService,private router:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.pid2 = this.route.snapshot.params['pid2'];
    }else{
      this.router.navigate(['/PLogin']);
    }
   // this.pid2=this.route.snapshot.params['pid2'];
  }

  saveMedicineDetails(){

    this.patientService.addMedicineDetails1(this.pid2,this.pprescription).subscribe(data => {
      console.log(data);
      this.goTomedicalReport();
      },
      error => console.log(error));
  }
  onSubmit(){
    this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);
  }

  
    goTomedicalReport(){
      window.alert("Added Succesfully");
      this.router.navigate(['/addMedicine/',sessionStorage.getItem('ppid')]);
    }

    processLogout() {
      sessionStorage.removeItem('ppid');
      sessionStorage.removeItem('pfname');
      sessionStorage.removeItem('plname');
      this.router.navigate(['PLogin']);
    }
  
}
