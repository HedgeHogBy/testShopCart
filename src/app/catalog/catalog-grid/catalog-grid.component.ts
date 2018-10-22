import {Component, OnChanges, Input, SimpleChanges} from '@angular/core';

import Product from '../../interface/product.interface';


@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.scss']
})
export class CatalogGridComponent implements OnChanges {
  @Input() products: Product[];
  @Input() gridSize: number;

  visibleProducts: Product[];
  page = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!this.visibleProducts && this.products && this.products.length) {
      this.setProductsOnPage(this.page);
    }
  }

  trackByFn(index, product) {
     return product.productId;
  }

  setProductsOnPage(page: number): void {
    const offsetStart: number = (page - 1) * this.gridSize;
    const offsetEnd: number = this.gridSize * page;

    this.visibleProducts = this.products.slice(offsetStart, offsetEnd);
  }

  onBuy(product: Product): void {
    console.log(product);
  }
}
