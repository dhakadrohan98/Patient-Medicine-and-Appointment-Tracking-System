import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-recept-forgotpass',
  templateUrl: './recept-forgotpass.component.html',
  styleUrls: ['./recept-forgotpass.component.css']
})
export class ReceptForgotpassComponent implements OnInit {

  receptionist: Receptionist = new Receptionist();
  constructor(private recepservice: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
  }

  sendPasswordByEmail() {
    this.recepservice.receptionistCheckEmail(this.receptionist).subscribe(data => {
      this.receptionist = data;
      if (this.receptionist.receptionistId != 0) {

        this.recepservice.receptionistForgotPassword(this.receptionist).subscribe(data => {
          console.log(data);
        });
        this.router.navigate(['LoginRecept']);
      } else {
        this.router.navigate(['ForgotRecept']);
      }
      console.log(data);
    });

  }


}