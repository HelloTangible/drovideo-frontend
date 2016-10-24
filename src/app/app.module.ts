import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MarkerComponent } from './marker/marker.component';
import { HomeComponent }       from './home/home.component';

import { MapService } from '../services/map.service';
import { GeocodingService } from '../services/geocoding.service';
import { routing,
         appRoutingProviders } from './routing/app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavigatorComponent,
    MarkerComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
      MapService,
      GeocodingService,
      appRoutingProviders,
      AUTH_PROVIDERS
  ]
})
export class AppModule { }
