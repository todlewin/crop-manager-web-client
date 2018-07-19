import { TestBed, async, inject } from '@angular/core/testing';

import { PlantDetailGuard } from './plant-detail.guard';

describe('PlantDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantDetailGuard]
    });
  });

  it('should ...', inject([PlantDetailGuard], (guard: PlantDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
