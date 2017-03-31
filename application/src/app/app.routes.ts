import { AppsviewComponent } from './appsview.component';
import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppsviewComponent
  },
  {
    path: 'product1',
    loadChildren: 'app/product1/product1.module#Product1Module'
  },
  {
    path: 'product2',
    loadChildren: 'app/product2/product2.module#Product2Module'
  },
  {
    path: 'product3',
    loadChildren: 'app/product3/product3.module#Product3Module'
  }

];
