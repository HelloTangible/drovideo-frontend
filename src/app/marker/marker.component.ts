import {Component} from '@angular/core';
import {MapService} from '../../services/map.service';
import {Map, LeafletMouseEvent, Marker} from 'leaflet';

@Component({
    selector: 'marker',
    templateUrl: './marker.component.html',
    styleUrls: [
        './marker.component.css'
    ],
    providers: []
})
export class MarkerComponent {
    editing: boolean;
    removing: boolean;
    markerCount: number;

    constructor(private mapService: MapService) {
        this.editing = false;
        this.removing = false;
        this.markerCount = 0;
    }

    ngOnInit() {
        this.mapService.disableMouseEvent('add-marker');
        this.mapService.disableMouseEvent('remove-marker');
    }

    Initialize() {
        this.mapService.map.on('click', (e: LeafletMouseEvent) => {
            if (this.editing) {
                let marker = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: './img/marker-icon.png',
                        shadowUrl: './img/marker-shadow.png'
                    }),
                    draggable: true
                })
                .bindPopup('Marker #' + (this.markerCount + 1).toString(), {
                    offset: L.point(12, 6)
                })
                .addTo(this.mapService.map)
                .openPopup();

                this.markerCount += 1;

                marker.on('click', (event: MouseEvent) => {
                    if (this.removing) {
                        this.mapService.map.removeLayer(marker);
                        this.markerCount -= 1;
                    }
                });
            }
        });
    }

    toggleEditing() {
        this.editing = !this.editing;

        if (this.editing == true && this.removing == true) {
            this.removing = false;
        }
    }

    toggleRemoving() {
        this.removing = !this.removing;

        if (this.editing == true && this.removing == true) {
            this.editing = false;
        }
    }
}
