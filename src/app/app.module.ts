import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { HomeComponent } from './front/home/home.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { AdminHeaderComponent } from './includes/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './includes/admin/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './includes/admin/admin-sidebar/admin-sidebar.component';


const appRoutes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
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
