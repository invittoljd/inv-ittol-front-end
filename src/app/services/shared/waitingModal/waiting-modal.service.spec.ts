import { TestBed } from '@angular/core/testing';

import { WaitingModalService } from './waiting-modal.service';

describe('WaitingModalService', () => {
  let service: WaitingModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
