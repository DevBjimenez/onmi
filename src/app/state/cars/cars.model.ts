export class CarsStateModel {
  public items: Car[] = [] ;
  loading: boolean = false;
}

export interface Car{
  photo: string;
  model: string;
  year: string;
  brand: string;
  price: string;
}
