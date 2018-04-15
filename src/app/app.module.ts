import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DemoServiceService } from './demo-service.service';
import {AuthService } from './auth.service';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'data',
        component : DataComponent
      },
      {
        path: 'admin',
        component : AdminComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'login',
        component : LoginComponent
      },
      {
        path: 'dashboard',
        component : DashboardComponent
      },
      {
        path: 'register',
        component : RegisterComponent
      },
      {
        path: '',
        component : HomeComponent
      }
  ])
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [DemoServiceService,AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
