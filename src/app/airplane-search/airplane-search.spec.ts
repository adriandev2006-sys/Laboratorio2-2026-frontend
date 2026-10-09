import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirplaneSearch } from './airplane-search';

describe('AirplaneSearch', () => {
  let component: AirplaneSearch;
  let fixture: ComponentFixture<AirplaneSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirplaneSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(AirplaneSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
