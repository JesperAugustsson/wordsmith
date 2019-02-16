import { TestBed } from '@angular/core/testing';

import { ReverseService } from './reverse.service';

describe('ReverseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReverseService = TestBed.get(ReverseService);
    expect(service).toBeTruthy();
  });
});
