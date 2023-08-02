import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-recep',
  templateUrl: './nav-bar-recep.component.html',
  styleUrls: ['./nav-bar-recep.component.css']
})
export class NavBarRecepComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  processLogout1() {

    sessionStorage.removeItem('rId');
    sessionStorage.removeItem('rName');
    this.router.navigate(['HomePage']);
  }

}
