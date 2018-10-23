import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { pluck, retry, catchError, map } from 'rxjs/operators';

import { APP_CONFIG, AppConfig } from '../app-config.module';
import Product from '../interface/product.interface';

const EMPTY_RESULT = [];
const DEFAULT_IMG = 'https://via.placeholder.com/600/92c952';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static createProduct(product): Product {
    return {
      productId: product.productId,
      productName: product.productName,
      image: product.thumbnails.b2 || product.thumbnails.b3 || product.thumbnails.b4 || DEFAULT_IMG,
      productColor: product.productColor,
      productPrice: product.productPrice,
      quantity: 1
    };
  }

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // in production should be handled with some specific notification service
      alert(`${operation} failed: ${error.message}`);

      // in production could be logged to some remote server like https://sentry.io/
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.config.catalogApiUrl)
      .pipe(
        pluck('results'),
        map((catalogItems: Product[]) => catalogItems.map(ProductsService.createProduct)),
        retry(1),
        catchError(this.handleError('getData', EMPTY_RESULT))
      );
  }
}
