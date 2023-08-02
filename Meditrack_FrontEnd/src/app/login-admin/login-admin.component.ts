/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdDrRecepService } from '../ad-dr-recep.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {
  public Uinvalid=false;
  admin:any = new Admin();
 
  constructor(private addrrecepService:AdDrRecepService,private router: Router) {

   }
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("===============this method call==============");
    console.log(this.admin);
    this.checkadminLogin();
  }

  checkadminLogin() {
    const result:any = this.addrrecepService.adminLogin(this.admin).subscribe(data => {
      console.log(data);
      this.admin = data;
    
      if(this.admin.adminId!='0'){
        sessionStorage.setItem("adminName",this.admin.adminName);
      sessionStorage.setItem("ppid",this.admin.adminId);
    
        this.router.navigate(['admin-home']);
      }else{
        this.Uinvalid=true;
        window.alert("Wrong login Credentials");
      }
      
    },
    error => this.Uinvalid=true);
    console.log("failllll");
  }
}

