import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
    selector: 'app-vector-maps-cmp',
    templateUrl: './map.component.html'
})

export class MapComponent implements OnInit {
    ngOnInit() {


        // Satellite Map
        let myLatlng = new google.maps.LatLng(48.748817, -87.985428);
        let myLatlng2 = new google.maps.LatLng(49.748817, -89.985428);
        let myLatlng3 = new google.maps.LatLng(50.748817, -93.985428);
        const mapOptions2 = {
            zoom: 4,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
            center: myLatlng
            //,mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        let map = new google.maps.Map(document.getElementById('satelliteMap'), mapOptions2);



        let locoIcon = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'green',
          fillOpacity: 1.0,
          scale: 7,
          strokeColor: 'black',
          strokeWeight: 1
        };




        let marker = new google.maps.Marker({
            position: myLatlng,
            icon: locoIcon,
            map: map,
            title: 'Loco 8001'
        });

        let marker2 = new google.maps.Marker({
            position: myLatlng2,
            icon: locoIcon,
            map: map,
            title: 'Loco 8002'
        });
        let marker3 = new google.maps.Marker({
            position: myLatlng3,
            icon: locoIcon,
            map: map,
            title: 'Loco 8003'
        });

    }
}
