import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BasketPageComponent} from './basket-page/basket-page.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: BasketPageComponent,
    outlet: 'basket'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
