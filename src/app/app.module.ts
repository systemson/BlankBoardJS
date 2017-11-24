import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink, RouterLinkActive  } from '@angular/router';



import { AppComponent } from './app.component';

import { HomeComponent } from './front/home/home.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AdminHeaderComponent } from './includes/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './includes/admin/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './includes/admin/admin-sidebar/admin-sidebar.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'admin', component: DashboardComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
