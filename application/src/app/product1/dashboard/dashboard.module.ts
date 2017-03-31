import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsystemComponent } from './dashboardsystem/dashboardsystem.component';
import {RouterModule} from "@angular/router";
import {DashboardRoutes} from "./dashboard.routes";
import {DashboardComponent} from "./dashboard.component";
import { OverviewComponent } from './dashboardsystem/overview/overview.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, DashboardsystemComponent, OverviewComponent]
})
export class DashboardModule { }
