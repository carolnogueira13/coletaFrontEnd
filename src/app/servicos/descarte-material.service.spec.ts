import { TestBed } from '@angular/core/testing';

import { DescarteMaterialService } from './descarte-material.service';

describe('DescarteMaterialService', () => {
  let service: DescarteMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescarteMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
