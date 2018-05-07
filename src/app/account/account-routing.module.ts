import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotificationComponent } from './notification/notification.component';
import { OptionsComponent } from './options/options.component';
import { OrdersComponent } from './orders/orders.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
