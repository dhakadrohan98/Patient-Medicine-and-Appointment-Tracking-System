import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';
@Component({
  selector: 'app-receptionist-changepass',
  templateUrl: './receptionist-changepass.component.html',
  styleUrls: ['./receptionist-changepass.component.css']
})
export class ReceptionistChangepassComponent implements OnInit {

  receptionist: Receptionist = new Receptionist();
  constructor(private recepservice: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
  }

  changeReceptPass() {
    this.recepservice.checkReceptEmailPass(this.receptionist).subscribe(data => {
      this.receptionist = data;
      console.log(this.receptionist);
      console.log("check mail and pass");
      if (this.receptionist.receptionistId != 0) {
        let newpass = (<HTMLInputElement>document.getElementById('newpass')).value;
        this.receptionist.password = newpass;
        this.recepservice.changeReceptPass(this.receptionist).subscribe(data => {
        });
        console.log("change pass");
        this.router.navigate(['LoginRecept']);
      } else {
        console.log("no matching mail");
        this.router.navigate(['ChangeReceptPass']);
      }
    });


  }

}
