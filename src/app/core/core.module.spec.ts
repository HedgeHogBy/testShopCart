import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let sharedModule: CoreModule;

  beforeEach(() => {
    sharedModule = new CoreModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
