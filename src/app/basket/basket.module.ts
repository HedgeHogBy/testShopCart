import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { OrderTotalComponent } from './order-total/order-total.component';
import { BasketPageComponent } from './basket-page/basket-page.component';

@NgModule({
  imports: [
    CommonModule,
    BasketRoutingModule
  ],
  declarations: [BasketItemComponent, BasketListComponent, OrderTotalComponent, BasketPageComponent]
})
export class BasketModule { }
