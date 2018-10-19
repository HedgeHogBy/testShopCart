import { Component, Input, Output, EventEmitter} from '@angular/core';

import Product from '../../interface/product.interface';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product: Product;
  @Output() buy = new EventEmitter();

  onBuy() {
    this.buy.emit(this.product);
  }

}
