import { TestBed } from '@angular/core/testing';

import { ImprovementSuggestionsService } from './improvement-suggestions.service';

describe('ImprovementSuggestionsService', () => {
  let service: ImprovementSuggestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImprovementSuggestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
