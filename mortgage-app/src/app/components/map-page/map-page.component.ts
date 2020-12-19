import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.displayPopUp = false;
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
    // var transitLayer = new google.maps.KmlLayer();
    // transitLayer.setMap(this.map);
    this.createMarker();
  }
  displayPopUp = false;

  getDisplay() {
    return this.displayPopUp;
  }

  createMarker() {

    // list of hardcoded positions markers 
     var myLatLngList = {
         myLatLng : [{ lat: 35.2273, lng: -80.8433 }, { lat: 35.2269, lng: -80.8428 }]    
         };

        //iterate latLng and add markers 
        const shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: "poly",
        } as google.maps.MarkerShapePoly;

       for(const data of myLatLngList.myLatLng){
         var marker = new google.maps.Marker({
             position: data,
             map: this.map,
             title: 'markers',
             shape: shape,
            //  icon: 
            //    "https://developers.google.com/maps/documentation/javascript/examples/full/images/circle.png"
            
         });
         marker.addListener('click', () => {
          document.getElementById("popup").style.display = "flex";
          document.getElementById("map").style.opacity="0.3";
        });
      }
 };

}
