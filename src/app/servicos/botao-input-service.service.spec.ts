import { TestBed } from '@angular/core/testing';

import { BotaoInputServiceService } from './botao-input-service.service';

describe('BotaoInputServiceService', () => {
  let service: BotaoInputServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotaoInputServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
