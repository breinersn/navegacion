import { Pagina2Page } from '../index.paginas';
import { Component} from '@angular/core';
import { IonicPage, NavController, MenuController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController,
    private menuCtrl:MenuController) {
  }

  navegarPagina(){

    this.navCtrl.push(Pagina2Page);
  }

  menuPagina(){

    this.menuCtrl.toggle();
  }
}
