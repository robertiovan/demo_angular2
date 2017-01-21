
import { Component, OnInit,AfterViewChecked, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-google-maps',
    templateUrl: 'google-maps.component.html'
})
export default class GoogleMapsComponent implements AfterViewInit {
    @ViewChild('mapDiv') mapDiv: ElementRef;
    robertPlace = {lat: 51.878615, lng: -2.102384};
    cafePlace = {lat: 51.878202, lng: -2.102571};
    options:google.maps.MapOptions = {
        center: this.robertPlace,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
    };
    map: google.maps.Map;
    cafeMarker:google.maps.Marker;
    panorama:google.maps.StreetViewPanorama;

    constructor() { 
        
    }

    ngAfterViewInit() {
      this.map = new google.maps.Map(this.mapDiv.nativeElement, this.options);
      this.cafeMarker = new google.maps.Marker({
        position: this.cafePlace,
        map: this.map,
        icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00',
        title: 'Cafe Icon'
      });
      this.map.setTilt(45);
        this.panorama = this.map.getStreetView();
        this.panorama.setPosition(this.robertPlace);
        this.panorama.setPov(/** @type {google.maps.StreetViewPov} */({
            heading: 20,
            pitch: 0
        }));

        this.panorama.setVisible(false);
    } 

    changeToPanoramaView(){
        this.panorama.setVisible(true);
    }
}