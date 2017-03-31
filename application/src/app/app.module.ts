//system modules!
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module'
import { AppRoutes } from './app.routes';
import { RouterModule } from "@angular/router";

//Application Modules!
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppsviewComponent } from './appsview.component';



@NgModule({
  declarations: [
    AppComponent,
    AppsviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    SharedModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
