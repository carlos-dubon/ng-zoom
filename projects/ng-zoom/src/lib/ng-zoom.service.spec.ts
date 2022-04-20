import { TestBed } from '@angular/core/testing';

import { NgZoomService } from './ng-zoom.service';

describe('NgZoomService', () => {
  let service: NgZoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgZoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
