import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { from } from 'rxjs';
import { AdDrRecepService } from '../ad-dr-recep.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {
 

  doctor: Doctor = new Doctor();
 
  constructor(private addrrecepService: AdDrRecepService,private router: Router) { }
  ngOnInit(): void {
       
  }

  onSubmit(){
    console.log("===============this method call==============");
    console.log(this.doctor);

    this.addrrecepService.createDoctor(this.doctor).subscribe(data=>{
      console.log(data)
  },
    error=>console.log(error));
  }
}