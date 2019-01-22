
import { AdminPageComponent } from './app/admin-page/admin-page.component';
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../src/app/login/login.component';
import {AddCampComponent} from './app/add-camp/add-camp.component';
import {AddOrgComponent} from './app/add-org/add-org.component';
import {AddEmpComponent} from './app/add-emp/add-emp.component';
import {ViewOrgComponent} from './app/view-org/view-org.component';
import { ViewEmpComponent } from './app/view-emp/view-emp.component';
import { ViewCampComponent } from './app/view-camp/view-camp.component';

const routes: Routes = [
 
  { path: '', component: LoginComponent},
    {path : 'AdminPage', component : AdminPageComponent},
    {path : 'addEmp', component :AddEmpComponent},
    {path : 'addCamp', component : AddCampComponent},
    {path : 'addOrg', component : AddOrgComponent},
    {path : 'viewOrg', component : ViewOrgComponent},
    {path : 'viewEmp', component : ViewEmpComponent},
    {path : 'viewCamp', component : ViewCampComponent},
  
 
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