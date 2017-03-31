import {Routes} from '@angular/router';
import {Product1Component} from "./product1.component";
import {Product1ViewComponent} from "./product1view.component";

export const Product1Routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Product1Component,
    children:[
      {
        path: 'dashboard',
        loadChildren: 'dashboard/dashboard.module#DashboardModule'
      },
      {
        path: "",
        pathMatch: 'full',
        component: Product1ViewComponent
      }
    ]
  }


];
