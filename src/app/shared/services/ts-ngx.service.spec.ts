import { TestBed } from '@angular/core/testing';

import { TsNgxService } from './ts-ngx.service';

describe('TsNgxService', () => {
  let service: TsNgxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsNgxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
