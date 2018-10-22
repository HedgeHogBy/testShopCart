import {Component, Inject, OnInit} from '@angular/core';

import {ProductsService} from '../products.service';
import {APP_CONFIG, AppConfig} from '../../app-config.module';
import Product from '../../interface/product.interface';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  products: Product[];
  productsOnPage: number;

  constructor(
    private productsService: ProductsService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  ngOnInit() {
    this.productsOnPage = this.config.productsOnPage;

    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
