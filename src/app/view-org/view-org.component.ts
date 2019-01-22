import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from '../../../../Visitor-chechk-in/node_modules/rxjs';
import { Organisation } from '../../app/models/organisation';
import { OrganisationService } from '../../app/services/organisation.service';



@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.css']
})
export class ViewOrgComponent implements OnInit {

  counter = 0;
  name;
  campusId;
  organisations: Observable<Organisation>

  constructor(private router: Router,private orgService: OrganisationService) { 
    this.organisations = orgService.getOrganisations() ;
  }

  ngOnInit() {
  }
  clickedOrg(val){
    this.name = val.name;
    this.campusId = val.campusId
     console.log("ds"+ val.id);
     this.counter = 1;
   }
   delete(){
 
   }
}
