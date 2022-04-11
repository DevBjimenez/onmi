import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { FetchCars, SetCars } from './cars.actions';
import { CarsStateModel } from './cars.model';
import { CarsService } from './cars.service';
import { patch } from '@ngxs/store/operators';
import { tap } from 'rxjs';

const defaults = {
    items: [],
    loading: false,
};

@State<CarsStateModel>({
    name: 'cars',
    defaults,
})
@Injectable()
export class CarsState {
    constructor(private carsService: CarsService) {}

    @Action(FetchCars)
    fetch({ setState, dispatch }: StateContext<CarsStateModel>) {
        setState(
            patch({
                loading: true,
            })
        );

        return dispatch(new SetCars());
    }
    @Action(SetCars)
    set({ setState }: StateContext<CarsStateModel>) {
        return this.carsService.get().pipe(
            tap((cars) => {
                setState(
                    patch({
                        items: [...cars],
                        loading: false,
                    })
                );
            })
        );
    }
}
