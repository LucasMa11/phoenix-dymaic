import { TestBed } from '@angular/core/testing';

import { PhoenixBetaSaService } from './phoenix-beta-sa.service';

describe('PhoenixBetaSaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoenixBetaSaService = TestBed.get(PhoenixBetaSaService);
    expect(service).toBeTruthy();
  });
});
