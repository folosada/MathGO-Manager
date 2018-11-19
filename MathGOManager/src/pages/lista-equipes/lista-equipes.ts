import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaEquipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-equipes',
  templateUrl: 'lista-equipes.html',
})
export class ListaEquipesPage {

  private teams: Array<Team>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teams = new Array<Team>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEquipesPage');
  }


  editTeam(team: Team) {

  }
}
