import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HttpClientModule} from "@angular/common/http";
import {CarsState} from "./state/cars/cars.state";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxsModule.forRoot([
          CarsState
        ], { developmentMode: !environment.production }),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production,
        }),
        NgxsLoggerPluginModule.forRoot({
            disabled: environment.production,
        }),
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
