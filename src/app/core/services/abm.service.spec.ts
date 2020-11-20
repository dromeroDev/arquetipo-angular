import { TestBed } from '@angular/core/testing';

import { AbmService } from './abm.service';

describe('AbmService', () => {
  let service: AbmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
