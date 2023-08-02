import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctor1: Doctor[];
  constructor(private patientservice: PatientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.patientservice.getDoctorList().subscribe(data => {
        console.log(data);
        this.doctor1 = data;
      });
    }else{
      this.router.navigate(['/PLogin']);
    }
  }

}
