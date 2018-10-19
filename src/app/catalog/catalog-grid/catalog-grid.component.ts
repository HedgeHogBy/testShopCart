import { Component, OnInit, Inject } from '@angular/core';

import Product from '../../interface/product.interface';
import { ProductsService } from '../products.service';
import {APP_CONFIG, AppConfig} from '../../app-config.module';

@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.scss']
})
export class CatalogGridComponent implements OnInit {
  products: Product[];
  visibleProducts: Product[];
  page = 1;
  size;

  constructor(
    private productsService: ProductsService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  ngOnInit() {
    this.size = this.config.gridSize;

    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  trackByFn(index, product) {
     return product.productId;
  }

  onBuy(product: Product): void {

  }

}
