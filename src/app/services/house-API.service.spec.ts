/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HouseAPIService } from './house-API.service';

describe('Service: HouseAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseAPIService]
    });
  });

  it('should ...', inject([HouseAPIService], (service: HouseAPIService) => {
    expect(service).toBeTruthy();
  }));
});
