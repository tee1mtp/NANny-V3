import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {GalleryPage} from '../gallery/gallery';
import {RoadblocksPage} from '../roadblocks/roadblocks';
import { Geolocation } from '@ionic-native/geolocation';
// import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

// Below Code is required for API example
// posts: any;

//Next two lines is needed for googlemaps
@ViewChild('map') mapElement: ElementRef;
 map: any;


  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              private alertCtrl: AlertController) {
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

  showImages2(){
    this.navCtrl.push( RoadblocksPage );
  }

//Below Code is required for googlemaps
  ionViewDidLoad(){
    this.loadMap();
    console.log("ionView Loaded")
  }


  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }, (success) => {
       console.log(success);
     });

  }

  //Below code is needed to add a marker to googlemaps
  addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}

addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}

// Alert Buttons After Clicking Yes or

presentAlert(custometitle) {
  let alert = this.alertCtrl.create({
      title: custometitle,
      subTitle: 'Thank you for your submission!\
//       Thanks to you, we can help  make the streets safer!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentPrompt(custometitle) {
  let alert = this.alertCtrl.create({
    title: 'Enter Location:',
    inputs: [
      {
        name: 'location',
        placeholder: 'Location'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Submit',
        handler: data => {
          console.log(data.location);
          this.presentAlert(custometitle);
          }
        }
    ]
  });
  alert.present();
  }

// presentConfirm(custometitle) {
//   let alert = this.alertCtrl.create({
//     title: custometitle,
//     message: 'Use your current location?',
//     buttons: [
//       {
//         text: 'Yes',
//         role: 'cancel',
//         handler: () => {
//           console.log('Cancel clicked');
//           this.presentAlert(custometitle);
//         }
//       },
//       {
//         text: 'No',
//         handler: () => {
//           console.log('Buy clicked');
//           this.presentPrompt(custometitle);
//         }
//       }
//     ]
//   });
//   alert.present();
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
