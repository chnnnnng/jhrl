import { TestBed } from '@angular/core/testing';

import { RawdataServiceService } from './rawdata-service.service';

describe('RawdataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RawdataServiceService = TestBed.get(RawdataServiceService);
    expect(service).toBeTruthy();
  });
});
