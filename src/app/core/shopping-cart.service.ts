import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import Product from '../interface/product.interface';
import Order from '../interface/order.interface';
import {APP_CONFIG, AppConfig} from '../app-config.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private order: Order = {
    products: {},
    subTotal: 0,
    total: 0,
    taxes: 0
  };

  private orderSubject: BehaviorSubject<Order> = new BehaviorSubject(this.order);

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

  private calculateOrder(): void {
    const products: Product[] = Object.values(this.order.products);

    this.order.subTotal = products.reduce((sum, product) => {
      return sum + (product.quantity * product.productPrice);
    }, 0);

    this.order.taxes = this.order.subTotal * this.config.gst;
    this.order.total = this.order.subTotal + this.order.taxes;
  }

  private hasProduct(key: string): boolean {
    return Boolean(this.order.products[key]);
  }

  private getProduct(key: string): Product {
    return this.order.products[key];
  }

  private setProduct(key: string, item: Product): void {
    this.order.products[key] = item;
  }

  private removeProduct(key: string): void {
    delete this.order.products[key];
  }

  getOrder(): Observable<Order> {
    return this.orderSubject.asObservable();
  }

  addItem(item: Product): void {
    if (this.hasProduct(item.productId)) {
      item.quantity = this.getProduct(item.productId).quantity + 1;
    }

    this.setProduct(item.productId, item);
    this.calculateOrder();

    this.orderSubject.next(this.order);
  }

  removeItem(item: Product): void {
    const product = this.getProduct(item.productId);

    if (product.quantity > 1) {
      this.getProduct(item.productId).quantity--;
    } else {
      this.removeProduct(item.productId);
    }
    this.calculateOrder();

    this.orderSubject.next(this.order);
  }
}
