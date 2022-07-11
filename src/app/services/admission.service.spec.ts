import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


import { AdmissionService } from './admission.service';

describe('AdmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AdmissionService = TestBed.get(AdmissionService);
    expect(service).toBeTruthy();
  });
});
