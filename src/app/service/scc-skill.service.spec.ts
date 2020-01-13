import { TestBed } from '@angular/core/testing';

import { SccSkillService } from './scc-skill.service';

describe('SccSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SccSkillService = TestBed.get(SccSkillService);
    expect(service).toBeTruthy();
  });
});
