import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  processLogout() {
    sessionStorage.removeItem('ppid');
    sessionStorage.removeItem('pfname');
    sessionStorage.removeItem('plname');
    this.router.navigate(['PLogin']);
  }

  goToHomePage(){
    this.router.navigate(['/PatientHomePage/',sessionStorage.getItem('ppid')]);
  }
}
