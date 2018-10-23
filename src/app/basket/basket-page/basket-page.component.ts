import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { ShoppingCartService } from '../../core/shopping-cart.service';

import Order from '../../interface/order.interface';
import Product from '../../interface/product.interface';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit, OnDestroy {
  gst: number;
  order: Order;
  products: Product[];

  private destroyed$ = new Subject();

  constructor(
    private shoppingCartService: ShoppingCartService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  ngOnInit() {
    this.gst = this.config.gst;

    this.shoppingCartService.getOrder()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((order) => {
      this.products = Object.values(order.products);

      return this.order = order;
    });
  }

  public ngOnDestroy (): void {
      this.destroyed$.next();
  }
}
