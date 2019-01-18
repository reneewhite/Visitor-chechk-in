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
vis(){
  this.router.navigate(['visitor']);
}

logout(){
  
}
}
