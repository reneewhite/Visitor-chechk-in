import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../Visitor-chechk-in/node_modules/rxjs';
import { Cumpas } from '../../app/models/cumpas';
import { CumpasService } from '../../app/services/cumpas.service';

@Component({
  selector: 'app-view-camp',
  templateUrl: './view-camp.component.html',
  styleUrls: ['./view-camp.component.css']
})
export class ViewCampComponent implements OnInit {
  name;
  location;
  counter = 0;
  cumpases: Observable<Cumpas>;
  constructor(private cumpasService:CumpasService) {
    this.cumpases = cumpasService.getCumpases();
   }

  ngOnInit() {
  }
  clickedCumpas(val) {
    this.name = val.name;
    this.location = val.location
    this.counter = 1;
  }
  delete() {

  }
}
