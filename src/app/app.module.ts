import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HomeComponent } from './front/home/home.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminHeaderComponent } from './admin/includes/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/includes/admin-footer/admin-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
