import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PPrescription } from '../pprescription';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-update-medicine-record',
  templateUrl: './update-medicine-record.component.html',
  styleUrls: ['./update-medicine-record.component.css']
})
export class UpdateMedicineRecordComponent implements OnInit {

  medicineId:number;
  pprescription:PPrescription= new PPrescription();
  constructor(private patientservice:PatientService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.medicineId = this.route.snapshot.params['medicineId'];
    this.patientservice.getSmedicineRecord(this.medicineId).subscribe(data =>{
      console.log(data);
      this.pprescription = data;
    },
      error => console.log(error));
  }

  saveMedicineDetails(){
    this.patientservice.updateSmedicineRecord(this.medicineId,this.pprescription).subscribe(data => {
      console.log();
      this.pprescription = new PPrescription();
      this.goToUpdateMedicine();

    },
     error => console.log(error));
  }

  onSubmit(){
    this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);
  }

  goToUpdateMedicine(){
    //this.router.navigate(['/updateSmedicineR/',this.medicineId]);
    this.router.navigate(['/PViewMedicalReport/',sessionStorage.getItem('ppid')]);

  }

}
