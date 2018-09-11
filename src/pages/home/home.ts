import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GalleryPage} from '../gallery/gallery';
// import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// Below Code is required for API example
// posts: any;

@ViewChild('map') mapElement: ElementRef;
 map: any;
 google: any;

  constructor(public navCtrl: NavController) {
    // Below Code is required for API example
  //             public http: Http) {
  //               this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=20').map(res => res.json()).subscribe(data => {
  //                       this.posts = data.data.children;
  //                       console.log(this.posts)
  //             });
  }

  showImages(){
    this.navCtrl.push( GalleryPage );
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

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
}
