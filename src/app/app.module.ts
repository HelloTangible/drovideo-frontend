import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import { AppComponent } from './app.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {MarkerComponent} from './marker/marker.component';

import {MapService} from '../services/map.service';
import {GeocodingService} from '../services/geocoding.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavigatorComponent,
    MarkerComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
      MapService,
      GeocodingService
  ]
})
export class AppModule { }
