import Product from './product.interface';

export default interface Order {
  products: {[index: string]: Product};
  subTotal: number;
  total: number;
  taxes: number;
}

