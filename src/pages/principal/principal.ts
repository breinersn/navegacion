import { Pagina2Page } from '../index.paginas';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {
  }

  navegarPagina(){

    this.navCtrl.push(Pagina2Page);
  }

}
