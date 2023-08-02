import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';

@Component({
  selector: 'app-receptionist-details',
  templateUrl: './receptionist-details.component.html',
  styleUrls: ['./receptionist-details.component.css']
})
export class ReceptionistDetailsComponent implements OnInit {

  receptionist: Receptionist[];
  constructor(private patientservice: PatientService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      this.patientservice.getReceptionistList().subscribe(data => {
        this.receptionist = data;
      });
    }else{
      this.router.navigate(['HomePage']);
    }
  }
}
