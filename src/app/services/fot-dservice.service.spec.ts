import { TestBed } from '@angular/core/testing';

import { FotDServiceService } from './fot-dservice.service';

describe('FotDServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FotDServiceService = TestBed.get(FotDServiceService);
    expect(service).toBeTruthy();
  });
});
