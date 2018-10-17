import { BasketModule } from './basket.module';

describe('BasketModule', () => {
  let shopingCartModule: BasketModule;

  beforeEach(() => {
    shopingCartModule = new BasketModule();
  });

  it('should create an instance', () => {
    expect(shopingCartModule).toBeTruthy();
  });
});
