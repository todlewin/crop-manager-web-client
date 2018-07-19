import { PlantModule } from './plant.module';

describe('PlantModule', () => {
  let plantModule: PlantModule;

  beforeEach(() => {
    plantModule = new PlantModule();
  });

  it('should create an instance', () => {
    expect(plantModule).toBeTruthy();
  });
});
