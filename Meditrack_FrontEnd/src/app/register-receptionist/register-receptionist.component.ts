import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { AdDrRecepService } from '../ad-dr-recep.service';
import { PatientService } from '../patient.service';

import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-register-receptionist',
  templateUrl: './register-receptionist.component.html',
  styleUrls: ['./register-receptionist.component.css']
})
export class RegisterReceptionistComponent implements OnInit {
  // x:any = 10;
  doctor:Doctor[];
  receptionist: Receptionist = new Receptionist();
  constructor(private addrrecepService:AdDrRecepService ,private patientService: PatientService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.patientService.getDoctorList().subscribe(data=> {
      this.doctor = data;
    });
  }

  onSubmit(){
      console.log(this.receptionist);
      this.saveReceptionist();
  }

  saveReceptionist(){
    this.addrrecepService.createReceptionist(this.receptionist).subscribe(data=>{
      console.log(data);
      console.log("Saved");
      this.router.navigate(['LoginRecept']);
    },
      error=>console.log(error));
  }
}

