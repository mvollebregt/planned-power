import {TestBed} from '@angular/core/testing';

import {MyFirstContractService} from './my-first-contract.service';

describe('MyFirstContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFirstContractService = TestBed.get(MyFirstContractService);
    expect(service).toBeTruthy();
  });
});
