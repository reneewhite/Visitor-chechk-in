import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addEmp(){
  this.router.navigate(['addEmp']);
}
addCamp(){
  this.router.navigate(['addCamp']);
}
addOrg(){
  this.router.navigate(['addOrg']);
}
logout(){
  
}
viewOrg(){
  this.router.navigate(['viewOrg']);
}
viewEmp(){
  this.router.navigate(['viewEmp']);

}
viewCamp(){
  this.router.navigate(['viewCamp']);
}
}
