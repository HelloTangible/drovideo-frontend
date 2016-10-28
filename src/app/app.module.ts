import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent }       from './home/home.component';
import { MapComponent } from './map/map.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MarkerComponent } from './marker/marker.component';

import { MapService } from '../services/map.service';
import { GeocodingService } from '../services/geocoding.service';
import { AppRoutingModule } from './routing/app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavigatorComponent,
    MarkerComponent,
    MapComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
      MapService,
      GeocodingService,
      AUTH_PROVIDERS
  ]
})
export class AppModule { }
