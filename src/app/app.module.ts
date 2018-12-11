import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { DetailPage } from '../pages/detail/detail';
import { SchoolPage } from '../pages/school/school';
import { RoadblocksPage } from '../pages/roadblocks/roadblocks';
import { LocationPage } from '../pages/location/location';
import { LocationSelectPage } from '../pages/location-select/location-select';

import {ComponentsModule} from '../components/components.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
// import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
// import { Connectivity } from '../providers/connectivity-service';
// import { GoogleMaps } from '../providers/google-maps';
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    DetailPage,
    SchoolPage,
    RoadblocksPage,
    LocationPage,
    LocationSelectPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    // HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    DetailPage,
    SchoolPage,
    RoadblocksPage,
    LocationPage,
    LocationSelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    // GoogleMapsProvider,
    // Connectivity,

    // GoogleMapsProvider,
    Network
  ]
})
export class AppModule {}
