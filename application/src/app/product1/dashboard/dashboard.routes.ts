import { Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {DashboardsystemComponent} from "./dashboardsystem/dashboardsystem.component";
import {OverviewComponent} from "./dashboardsystem/overview/overview.component";


export const DashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboardsystem',
        component: DashboardsystemComponent,
        children: [
          {
            path: 'overview',
            component: OverviewComponent
          },
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'dashboardsystem',
        pathMatch: 'full'
      }
    ]
  }
];
