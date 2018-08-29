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

  presentPrompt() {
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
          }
        }
    ]
  });
  alert.present();
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
          this.presentPrompt();
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
