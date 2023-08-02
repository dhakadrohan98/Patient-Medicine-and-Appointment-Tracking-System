import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
    
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ppid")){
      
    }else{
      this.router.navigate(['HomePage']);
    }
  }

  processLogout() {
   
    sessionStorage.removeItem('adminName');
    sessionStorage.removeItem('ppid');
    this.router.navigate(['admin-login']);
  }
}
