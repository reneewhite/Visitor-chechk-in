import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  adminForm: FormGroup;
 employee
 receptionist
  constructor(private fb:FormBuilder,private router: Router ) { 
    this.adminForm = this.fb.group({
      name : new FormControl ('', [Validators.required]),
      surname:  new FormControl ('', [Validators.required ]),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
     ])),
      persona : new FormControl('', [Validators.required]),
      orgID:  new FormControl('', [Validators.required ]),
   });
  }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['login']);

  }

  validation_messages = {
    'name': [
      { type: 'required', message: 'name is required' },
      { type: 'minlength', message: 'name must be at least 5 characters long' },
      { type: 'maxlength', message: 'name cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your name must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your name has already been taken' }
    ],
    'surname': [
      { type: 'required', message: 'Surname is required' },
   
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'persona': [
      { type: 'pattern', message: 'Please make a selection' }
    ],
    'orgID': [
      { type: 'required', message: 'Organisation ID is required' },
    ]
   
    }

}
