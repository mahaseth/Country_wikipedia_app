import { TestBed, inject } from '@angular/core/testing';

import { FetchApiService } from './fetch-api.service';

describe('FetchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchApiService]
    });
  });

  it('should be created', inject([FetchApiService], (service: FetchApiService) => {
    expect(service).toBeTruthy();
  }));
});
