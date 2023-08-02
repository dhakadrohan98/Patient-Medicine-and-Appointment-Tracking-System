/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-recept',
  templateUrl: './login-recept.component.html',
  styleUrls: ['./login-recept.component.css']
})
export class LoginReceptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-login-recept',
  templateUrl: './login-recept.component.html',
  styleUrls: ['./login-recept.component.css']
})
export class LoginReceptComponent implements OnInit {
  public rinvalid=false;
  //public sessionStorage = sessionStorage;
  receptionist: Receptionist = new Receptionist();
  receptionist2: any = new Receptionist();
  constructor(private recepservice: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
  }

  saveReceptionist() {
    const result: any = this.recepservice.ReceptionistLogin(this.receptionist).subscribe(data => {

      this.receptionist2 = data;
      sessionStorage.setItem("rId", this.receptionist2.receptionistId);
      sessionStorage.setItem("rName", this.receptionist2.receptionistName);
      console.log(sessionStorage.getItem("rId"));
      console.log(sessionStorage.getItem("rName"));


      if (sessionStorage.getItem("rId") == '0') {
        this.rinvalid=true;
        this.router.navigate(['/LoginRecept']);
      } else {
       
        this.router.navigate(['/HomeRecept']);
        //this.goToReceptionistHome();
      }
    },
    error => this.rinvalid=true);
  }

  goToReceptionistHome() {
    console.log("=========");
    this.router.navigate(['/HomeRecept']);
  }

  gotoForgotPassword() {
    this.router.navigate(['/ForgotRecept']);
  }

  gotoChangePassword() {
    this.router.navigate(['/ChangeReceptPass']);
  }

  onSubmit() {
    // console.log(this.employee);
    this.saveReceptionist();
  }
 
}