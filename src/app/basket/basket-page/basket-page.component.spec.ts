import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemComponent } from '../basket-item/basket-item.component';
import { BasketListComponent } from '../basket-list/basket-list.component';
import { OrderTotalComponent } from '../order-total/order-total.component';
import { BasketPageComponent } from './basket-page.component';
import {APP_CONFIG, APP_DI_CONFIG} from '../../app-config.module';

describe('BasketPageComponent', () => {
  let component: BasketPageComponent;
  let fixture: ComponentFixture<BasketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ],
      declarations: [ BasketPageComponent, BasketListComponent, OrderTotalComponent, BasketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
