import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-org',
  templateUrl: './add-org.component.html',
  styleUrls: ['./add-org.component.css']
})
export class AddOrgComponent implements OnInit {
  adminForm: FormGroup;
  message: string
  action: string
  name

  constructor(private fb:FormBuilder,private router: Router,public snackBar: MatSnackBar ) {
    this.message = 'Successfully Added'
    this.adminForm = this.fb.group({
      name : new FormControl ('', [Validators.required]),
   });
  }
  ngOnInit() {
  }
  register(){
    this.name = (this.adminForm.value.name);
    
    this.router.navigate(['AdminPage']);
    this.snackBar.open(this.message, this.action, {
      duration: 500,
    });
  }
  validation_messages = {
    'name': [
      { type: 'required', message: 'name is required' },
      
    ],

   
    }
}
