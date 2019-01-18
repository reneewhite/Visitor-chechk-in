import { VisitorComponent } from './app/visitor/visitor.component';
import { AdminPageComponent } from './app/admin-page/admin-page.component';
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../src/app/login/login.component';


const routes: Routes = [
 
  { path: 'login', component: LoginComponent},
    {path : 'AdminPage', component : AdminPageComponent},
    {path: 'visitor', component : VisitorComponent},
  
 
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