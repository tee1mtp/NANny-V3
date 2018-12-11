import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GalleryPage} from '../gallery/gallery';
import {RoadblocksPage} from '../roadblocks/roadblocks';
//import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
// import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// Below Code is required for API example
// posts: any;

//Next two lines is needed for googlemaps
@ViewChild('map') mapElement: ElementRef;
 map: any;


  constructor(public navCtrl: NavController,
              //private _googleMaps: GoogleMaps,
              public geolocation: Geolocation) {
    // Below Code is required for API example
  //             public http: Http) {
  //               this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=20').map(res => res.json()).subscribe(data => {
  //                       this.posts = data.data.children;
  //                       console.log(this.posts)
  //             });
  }

// Experimental Googlemaps code:
/*
ngAfterViewInit(){
this.initMap();
}

initMap(){
  let element = this.mapElement.nativeElement;
  this.map = this._googleMaps.create(element)
}
*/

// // Working Google Maps code below:
//   showImages(){
//     this.navCtrl.push( GalleryPage );
//   }
//
//   showImages2(){
//     this.navCtrl.push( RoadblocksPage );
//   }
//
// // Below Code is required for googlemaps
//   ionViewDidLoad(){
//     this.loadMap();
//     console.log("ionView Loaded")
//   }
//
//
//   loadMap(){
//
//     this.geolocation.getCurrentPosition().then((position) => {
//
//     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//     let mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//
//   }, (success) => {
//        console.log(success);
//      });
//
//   }
//
//   //Below code is needed to add a marker to googlemaps
//   addMarker(){
//
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
//
//   let content = "<h4>Information!</h4>";
//
//   this.addInfoWindow(marker, content);
//
// }
//
// addInfoWindow(marker, content){
//
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
//
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
//
// }


}

// Below Code is required for API example
//   this.http.get('http://ionic.io', {}, {})
//     .then(data => {
//
//       console.log(data.status);
//       console.log(data.data); // data received by server
//       console.log(data.headers);
//       console.log("Successful");
//     })
//     .catch(error => {
//
//       console.log(error.status);
//       console.log(error.error); // error message as string
//       console.log(error.headers);
//       console.log("Failure")
//     });
// public loadJCrew(){
//   console.log('Load JCrew');
// }
//
// this.loadJCrew();
