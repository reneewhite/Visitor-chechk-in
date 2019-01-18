
import { AdminPageComponent } from './app/admin-page/admin-page.component';
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../src/app/login/login.component';
import {AddCampComponent} from './app/add-camp/add-camp.component';
import {AddOrgComponent} from './app/add-org/add-org.component';
import {AddEmpComponent} from './app/add-emp/add-emp.component';


const routes: Routes = [
 
  { path: '', component: LoginComponent},
    {path : 'AdminPage', component : AdminPageComponent},
    {path : 'addEmp', component :AddEmpComponent},
    {path : 'addCamp', component : AddCampComponent},
    {path : 'addOrg', component : AddOrgComponent},
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }