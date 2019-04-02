import { TestBed } from '@angular/core/testing';

import { DeleteFortuneService } from './delete-fortune.service';

describe('DeleteFortuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteFortuneService = TestBed.get(DeleteFortuneService);
    expect(service).toBeTruthy();
  });
});
