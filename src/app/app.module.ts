import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app.routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { VisitorComponent } from './visitor/visitor.component';
import {MatSelectModule} from '@angular/material/select';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatSelectModule,
    AppRoutingModule,
  

    // RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
