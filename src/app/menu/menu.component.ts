import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  LoggedEmpno:string;
  LoggedEmpName:string
  LoggedEmpDesig:string;

  ngOnInit(): void {

    this.LoggedEmpno=localStorage.getItem('empno');
    this.LoggedEmpName=localStorage.getItem('name');
    

  }

  logout()
  {
    console.log('logout');  
    localStorage.setItem('isLoggedIn','false');    
    localStorage.clear();

    
    this.router.navigate(["/"]);
  }

}
