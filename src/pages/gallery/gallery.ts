import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {SchoolPage} from '../school/school';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController) {

  }


  presentConfirm(custometitle) {
    let alert = this.alertCtrl.create({
      title: custometitle,
      message: 'Use your current location?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  showDetail( ){
    this.navCtrl.push( SchoolPage );
  }
}
