import { TestBed } from '@angular/core/testing';

import { GetUserFortunesService } from './get-user-fortunes.service';

describe('GetUserFortunesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserFortunesService = TestBed.get(GetUserFortunesService);
    expect(service).toBeTruthy();
  });
});
