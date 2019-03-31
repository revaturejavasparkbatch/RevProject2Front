import { TestBed } from '@angular/core/testing';

import { UserCarryService } from './user-carry.service';

describe('UserCarryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarryService = TestBed.get(UserCarryService);
    expect(service).toBeTruthy();
  });
});
