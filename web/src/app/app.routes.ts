import { Routes } from '@angular/router';
import { ItemOverviewComponent } from './item/item-overview/item-overview.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/item/overview',
    pathMatch: 'full'
  },
  {
    path: 'item',
    children: [
      { path: 'overview', component: ItemOverviewComponent }
    ]
  }
];
