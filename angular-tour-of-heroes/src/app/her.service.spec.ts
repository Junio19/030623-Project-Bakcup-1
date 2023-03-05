import { TestBed } from '@angular/core/testing';

import { HerService } from './her.service';

describe('HerService', () => {
  let service: HerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
