import {Component, ViewChild} from '@angular/core';
import {NavigatorComponent} from '../navigator/navigator.component';
import {MarkerComponent} from '../marker/marker.component';
import {MapService} from '../../services/map.service';
import {GeocodingService} from '../../services/geocoding.service';
import {Auth} from '../../services/auth.service';
import {Location} from '../../core/location.class';

@Component({
  selector: 'map',
  providers: [ Auth ],
  template: `
    <div id="map">
        <navigator></navigator>
        <marker></marker>
    </div>
  `
})
export class MapComponent { 
  @ViewChild(MarkerComponent) markerComponent:MarkerComponent;

    constructor(private mapService: MapService, private geocoder: GeocodingService, private auth: Auth) {}

    ngOnInit() {
        var map = new L.Map('map', {
            zoomControl: false,
            center: new L.LatLng(40.731253, -73.996139),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: 'topright' }).addTo(map);
        L.control.layers(this.mapService.baseMaps).addTo(map);
        L.control.scale().addTo(map);

        this.mapService.map = map;
        this.geocoder.getCurrentLocation()
            .subscribe(
                location => map.panTo([location.latitude, location.longitude]),
                err => console.error(err)
            );
    }

    ngAfterViewInit() {
        this.markerComponent.Initialize();
    }
}