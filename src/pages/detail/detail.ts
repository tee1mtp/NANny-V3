import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  city: string;
  title: string;
  description:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.city = navParams.get('data');

      let dataMap = {
        "saopaolo": {
          "title": "São Paulo",
          "description": "São Paulo, Brazil’s vibrant financial center, is among the world's most populous cities, with numerous cultural institutions and a rich architectural tradition. Its iconic buildings range from its neo-Gothic cathedral and the 1929 Martinelli skyscraper to modernist architect Oscar Niemeyer’s curvy Edifício Copan."
        },
        "amsterdam": {
          "title": "Amsterdam",
          "description": "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths."
        },
        "sf": {
          "title": "San Fransisco",
          "description": "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison."
        },
        "madison": {
          "title": "Madison",
          "description": "Madison, the capital city of Wisconsin, lies west of Milwaukee. It’s known for the domed Wisconsin State Capitol, which sits on an isthmus between lakes Mendota and Monona. The Wisconsin Historical Museum documents the state’s immigrant and farming history. The city's paved Capital City State Trail runs past Monona Terrace, a lakefront convention center designed by Frank Lloyd Wright."
        }
      };

      this.title = dataMap[this.city].title;
      this.description = dataMap[this.city].description;
  }

}
