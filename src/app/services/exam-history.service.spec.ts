import { TestBed } from '@angular/core/testing';

import { ExamHistoryService } from './exam-history.service';

describe('ExamHistoryService', () => {
  let service: ExamHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
