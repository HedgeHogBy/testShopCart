import {Component, Input, OnInit} from '@angular/core';

import Product from '../../interface/product.interface';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {

  @Input() orderedProducts: Product[];

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, product) {
     return product.productId;
  }
}
