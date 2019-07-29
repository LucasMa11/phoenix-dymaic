import { TestBed } from '@angular/core/testing';

import { PhoenixProdSaService } from './phoenix-prod-sa.service';

describe('PhoenixProdSaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoenixProdSaService = TestBed.get(PhoenixProdSaService);
    expect(service).toBeTruthy();
  });
});
