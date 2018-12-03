import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditTeamPage } from '../edit-team/edit-team';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs-compat';
import { Team } from '../../app/model/Team';

@IonicPage()
@Component({
  selector: 'page-lista-equipes',
  templateUrl: 'lista-equipes.html'
})

export class ListaEquipesPage {

  private teams: Array<Team>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider) {
    this.teams = new Array<Team>();
    this.loadTeams(this.firebaseProvider.getAll());

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEquipesPage');
    //this.navCtrl.name = 'Equipes';
  }


  editTeam(team: Team) {
    this.navCtrl.push(EditTeamPage, { team: team, readOnly: false })
  }

  loadTeams(list: Observable<any>) {
    list.subscribe(items => {
      this.teams = new Array<Team>();
      items.forEach(element => {
        const payload = element.payload.val();
        payload.key = element.key;
        const team: Team = new Team();
        team._init(payload);
        this.teams.push(team)
      });
    })
  }
}
