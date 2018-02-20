import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpModule, 
    HttpClientModule, 
    RouterModule.forRoot(
      appRoutes
    ), 
    FormsModule, 
    CommonModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})


export class AppModule { }
 
