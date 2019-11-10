import { TestBed } from '@angular/core/testing';

import { ContentfulUserService } from './contentful-user.service';

describe('ContentfulUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentfulUserService = TestBed.get(ContentfulUserService);
    expect(service).toBeTruthy();
  });
});
