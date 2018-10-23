import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import {APP_CONFIG, APP_DI_CONFIG} from '../app-config.module';

describe('ShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ]
    }));

  it('should be created', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });
});
