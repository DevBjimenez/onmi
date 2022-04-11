import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Car, CarsStateModel } from '../state/cars/cars.model';
import { FetchCars } from '../state/cars/cars.actions';
import { CarsState } from '../state/cars/cars.state';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
    // @ts-ignore
    @Select(CarsState) cars$: Observable<CarsStateModel>;
    carsState: Partial<CarsStateModel> = {};
    constructor(private store: Store) {
        this.store.dispatch(new FetchCars());
    }

    ngOnInit(): void {
        this.cars$.subscribe((carState) => {
            this.carsState = carState;
        });
    }
}
