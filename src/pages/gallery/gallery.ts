import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {SchoolPage} from '../school/school';
import {LocationPage} from '../location/location';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  nameInput: string;


  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController) {

  }

  // buttonPractice(){
  //   console.log(this.nameInput);
  // }

//   presentAlert(custometitle) {
//     let alert = this.alertCtrl.create({
//       title: custometitle,
//       subTitle: 'Thank you for your submission!\
//       Thanks to you, we can help  make the streets safer!',
//       buttons: ['Dismiss']
//     });
//     alert.present();
//   }
//
//   presentPrompt(custometitle) {
//   let alert = this.alertCtrl.create({
//     title: 'Enter Location:',
//     inputs: [
//       {
//         name: 'location',
//         placeholder: 'Location'
//       }
//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: data => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Submit',
//         handler: data => {
//           console.log(data.location);
//           this.presentAlert(custometitle);
//           }
//         }
//     ]
//   });
//   alert.present();
//   }
//
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

  showDetail( ){
    this.navCtrl.push( LocationPage );
  }
}
