import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GalleryPage} from '../gallery/gallery';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

posts: any;

  constructor(public navCtrl: NavController,
              public http: Http) {
                this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=20').map(res => res.json()).subscribe(data => {
                        this.posts = data.data.children;
                        console.log(this.posts)
              });
  }

  showImages(){
    this.navCtrl.push( GalleryPage );
  }


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
