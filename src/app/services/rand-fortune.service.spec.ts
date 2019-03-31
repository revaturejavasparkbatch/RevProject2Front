import { TestBed } from '@angular/core/testing';

import { RandFortuneService } from './rand-fortune.service';

describe('RandFortuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandFortuneService = TestBed.get(RandFortuneService);
    expect(service).toBeTruthy();
  });
});
