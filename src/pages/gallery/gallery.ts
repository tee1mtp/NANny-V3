import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {SchoolPage} from '../school/school';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController) {

  }

// private alertctrl: AlertController
// presentConfirm() {
// let alert = this.alertctrl.create({
//   title: 'Confirm purchase',
//     message: 'Do you want to buy this book?',
//     // buttons: [
//     //
//     //     text: 'Cancel',
//     //     role: 'cancel',
//     //     handler: () => {
//     //       console.log('Cancel clicked');
//     //     }
//     //   },
//     //   {
//     //     text: 'Buy',
//     //     handler: () => {
//     //       console.log('Buy clicked');
//     //     }
//     //   }
//     // ]
//   });
//   alert.present();
// }

  showDetail( ){
    this.navCtrl.push( SchoolPage );
  }
}
