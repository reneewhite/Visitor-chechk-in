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
import {MatSnackBar} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {MatSelectModule} from '@angular/material/select';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EmployeesComponent } from './employees/employees.component';
import { ToastComponent } from './toast/toast.component';
import {AddCampComponent} from './add-camp/add-camp.component';
import {AddOrgComponent} from './add-org/add-org.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import {ViewOrgComponent} from './view-org/view-org.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { ViewCampComponent } from './view-camp/view-camp.component';
import {MatListModule} from '@angular/material/list';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserService } from './services/user-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    EmployeesComponent,
    ToastComponent,
    AddCampComponent,
    AddOrgComponent,
    AddEmpComponent,
    ViewOrgComponent,
    ViewEmpComponent,
    ViewCampComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
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
    MatSnackBarModule,
    MatListModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
