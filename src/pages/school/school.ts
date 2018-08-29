import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-school',
  templateUrl: 'school.html'
})
export class SchoolPage {

  constructor(public navCtrl: NavController) {

  }

  showDetail( ){
    this.navCtrl.push( SchoolPage);
  }

}
