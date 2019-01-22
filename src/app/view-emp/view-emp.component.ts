import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user-service';
import { Observable } from '../../../../Visitor-chechk-in/node_modules/rxjs';
import { User } from '../../app/models/user';
import {Organisation} from '../../app/models/organisation';
import {OrganisationService} from '../../app/services/organisation.service';
 
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  counter = 0;
  employees: Observable<any>;
  user:any
  email;
  firstname;
  lastname;
  persona;
  userId;
  organizationId;

  constructor (private userService: UserService) { 
    console.log(userService.users);
    this.employees = userService.usersList();
  }
  clickedUser(val){
    
    console.log(val.id);

    this.userId = val.id;
    this.email = val.email;
    this.firstname = val.firstname;
    this.lastname = val.lastname;
    this.persona = val.personna;
    this.organizationId = val.organizationId;
    this.counter = 1;
  }
  delete(){
    this.userService.deleteUser(this.user.id);
  }
  ngOnInit() {
  }

}
