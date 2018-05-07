import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { NotificationComponent } from './notification/notification.component';
import { OptionsComponent } from './options/options.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [OrdersComponent, NotificationComponent, OptionsComponent, ReviewsComponent]
})
export class AccountModule { }
