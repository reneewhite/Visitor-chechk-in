import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit {
  adminForm: FormGroup;
  message: string
  action: string
  name
  location
  constructor(private fb:FormBuilder,private router: Router, public snackBar: MatSnackBar ) { 
    this.message = 'Successfully Added'
    this.adminForm = this.fb.group({
      name : new FormControl ('', [Validators.required]),
      location:  new FormControl ('', [Validators.required ]),
     
   });
  }

  ngOnInit() {
  }
  register(){
    this.name = (this.adminForm.value.name);
    this.location = (this.adminForm.value.location);
    this.router.navigate(['AdminPage']);
    this.snackBar.open(this.message, this.action, {
      duration: 500,
    });
  }
  validation_messages = {
    'name': [
      { type: 'required', message: 'name is required' },
     
    ],
    'location': [
      { type: 'required', message: 'Surname is required' },
   
    ],

   
    }
}
