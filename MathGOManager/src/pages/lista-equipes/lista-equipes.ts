import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditTeamPage } from '../edit-team/edit-team';

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
    this.firebase.getToken().subscribe()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEquipesPage');
  }


  editTeam(team: Team) {
    this.navCtrl.push(EditTeamPage, {team: team, readOnly: false})
  }
}
