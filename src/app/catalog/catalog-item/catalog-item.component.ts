import { Component, Input } from '@angular/core';

import Product from '../../interface/product.interface';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product: Product;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {}

  onBuy() {
    this.shoppingCartService.addItem(this.product);
  }
}
