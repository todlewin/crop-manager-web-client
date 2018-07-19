import { CustomPipesModule } from './custom-pipes.module';

describe('CustomPipesModule', () => {
  let customPipesModule: CustomPipesModule;

  beforeEach(() => {
    customPipesModule = new CustomPipesModule();
  });

  it('should create an instance', () => {
    expect(customPipesModule).toBeTruthy();
  });
});
