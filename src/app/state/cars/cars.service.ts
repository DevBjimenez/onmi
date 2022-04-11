import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Car } from './cars.model';
import { HttpClient } from '@angular/common/http';
// import * as jsonURL from '';
@Injectable({
    providedIn: 'root',
})
export class CarsService {
    constructor(private http: HttpClient) {}
    // cars = jsonURL.cars;

    /**
     * @description send request to get all cars
     */
    get(): Observable<Car[]> {
        //     console.log(this.cars);
        //     return new Observable<Car[]>((observer) => {
        //         observer.next(this.cars as Car[]);
        //     });
        // }

        console.log('./assets/db.json');
        // @ts-ignore
        return this.http.get('./assets/db.json').pipe(
            delay(2000),
            map(({ cars }: any) => {
                return cars;
            })
        );
    }
}
