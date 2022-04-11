import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarListComponent } from './car-list/car-list.component';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [CarsComponent, CarListComponent],
    imports: [CommonModule, CarsRoutingModule, DataViewModule, InputTextModule],
})
export class CarsModule {}
