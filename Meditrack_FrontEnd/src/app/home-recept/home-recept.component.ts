import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Console } from 'console';

@Component({
  selector: 'app-home-recept',
  templateUrl: './home-recept.component.html',
  styleUrls: ['./home-recept.component.css']
})
export class HomeReceptComponent implements OnInit {
  public sessionStorage = sessionStorage;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    // if(sessionStorage.getItem("rId")){
     
    // }else{
    //   this.router.navigate(['admin-login']);
    // }

    if(sessionStorage.getItem("ppid")){
      // this.patientservice.getReceptionistList().subscribe(data => 
      // {
      //   this.receptionist = data;
      // });
    }else{
      this.router.navigate(['HomePage']);
    }


  }

  // ngOnInit(): void {
  //   if(sessionStorage.getItem("ppid")){
  //     this.patientservice.getDoctorList().subscribe(data => {
  //       console.log(data);
  //       this.doctor1 = data;
  //     });
  //   }else{
  //     this.router.navigate(['/PLogin']);
  //   }



  getConfirmedAppointmentDetails() {
    this.router.navigate(['/AppointmentDetails', sessionStorage.getItem('rId')]);
  }
  getRequestedAppointmentDetails() {
    this.router.navigate(['/RequestedAppointmentDetails', sessionStorage.getItem('rId')]);
  }

  processLogout() {

    sessionStorage.removeItem('rId');
    sessionStorage.removeItem('rName');
    this.router.navigate(['HomePage']);
  }

}
