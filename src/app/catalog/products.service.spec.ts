import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import {APP_CONFIG, APP_DI_CONFIG} from '../app-config.module';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [
        ProductsService,
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ],
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
