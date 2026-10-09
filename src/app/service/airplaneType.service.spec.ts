import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AirplaneTypeService} from './airplaneType.service';

describe('AirplaneTypeService', () => {
  let service: AirplaneTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(AirplaneTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
