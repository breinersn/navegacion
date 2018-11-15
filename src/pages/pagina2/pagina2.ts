import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';


@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes: any[] = [
    {
      nombre: "magneto",
      poder: "atraer metales"
    },
    {
      nombre: "wolverine",
      poder: "regeneracion acelerada"
    },
    {
      nombre: "profesor x",
      poder: "control mental"
    },
    {
      nombre: "gambito",
      poder: "cartas magicas"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irpagina3(mutante: any){

    this.navCtrl.push(Pagina3Page, {'mutante': mutante});
  }
}
