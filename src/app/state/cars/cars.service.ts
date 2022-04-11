import { Injectable } from '@angular/core';
import {delay, Observable} from "rxjs";
import {Car} from "./cars.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  /**
   * @description send request to get all cars
   */
  get():Observable<Car[]>{
    return this.http.get<Car[]>(`${environment.api}cars`).pipe(
      delay(3000)
    )
  }
}
