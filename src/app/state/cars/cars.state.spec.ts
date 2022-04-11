import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CarsState } from './cars.state';

describe('Cars actions', () => {
  let store: Store;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CarsState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

});
