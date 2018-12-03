import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaEquipesPage } from '../lista-equipes/lista-equipes';
import { RankingPage } from '../ranking/ranking';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { ResetPage } from '../reset/reset';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  constructor(public navCtrl: NavController) {

  }

  static get parameters() {
    return [[NavController]];
  }

  openRegisterTeams() {
    this.navCtrl.push(ListaEquipesPage);
  }

  openRanking() {
    this.navCtrl.push(RankingPage);
  }

  reset() {
    this.navCtrl.push(ResetPage);    
  }

}
