import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AirplaneService } from './airplane.service';

describe('AirplaneService', () => {
  let service: AirplaneService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(AirplaneService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('requests airplanes for the selected type from the backend endpoint', () => {
    service.findAirlineForType(7).subscribe();

    const request = httpTestingController.expectOne(
      'http://localhost:8084/airplane/findAllForType?type=7'
    );
    expect(request.request.method).toBe('GET');
    request.flush([]);
  });
});
