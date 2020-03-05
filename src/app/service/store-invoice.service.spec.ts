import { TestBed } from '@angular/core/testing';

import { StoreInvoiceService } from './store-invoice.service';

describe('StoreInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreInvoiceService = TestBed.get(StoreInvoiceService);
    expect(service).toBeTruthy();
  });
});
