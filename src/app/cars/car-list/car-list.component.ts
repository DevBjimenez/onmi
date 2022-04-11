import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Car } from '../../state/cars/cars.model';


@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
    @Input() cars: Car[] = [];
    @Input() loading: boolean = false;
    constructor() {}

    ngOnInit(): void {}

  filter(dataview: any, event: any): void{
    dataview.filter(event.target?.value, 'contains')
  }
}
