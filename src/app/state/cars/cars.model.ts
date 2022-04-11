export class CarsStateModel {
  public items: Car[] = [] ;
  loading: boolean = false;
}

export interface Car{
  id?: any;
  photo: string;
  model: string;
  year: any;
  brand: string;
  price: any;
}
