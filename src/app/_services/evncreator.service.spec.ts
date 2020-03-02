/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EvncreatorService } from './evncreator.service';

describe('Service: Evncreator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvncreatorService]
    });
  });

  it('should ...', inject([EvncreatorService], (service: EvncreatorService) => {
    expect(service).toBeTruthy();
  }));
});
