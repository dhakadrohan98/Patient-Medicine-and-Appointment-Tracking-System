import { TestBed } from '@angular/core/testing';

import { AdDrRecepService } from './ad-dr-recep.service';

describe('AdDrRecepService', () => {
  let service: AdDrRecepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdDrRecepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
