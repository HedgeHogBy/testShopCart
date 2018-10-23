import {Component, Input, OnInit} from '@angular/core';

import Product from '../../interface/product.interface';
import {ShoppingCartService} from '../../core/shopping-cart.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {}

  ngOnInit() {
  }

  onRemove() {
    this.shoppingCartService.removeItem(this.product);
  }
}
