import { TestBed } from '@angular/core/testing';

import { FavFortuneService } from './fav-fortune.service';

describe('FavFortuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavFortuneService = TestBed.get(FavFortuneService);
    expect(service).toBeTruthy();
  });
});
