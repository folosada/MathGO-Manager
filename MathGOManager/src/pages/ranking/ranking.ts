import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Team } from '../../app/model/Team';

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  private teams: Array<Team>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fireabaseProvider: FirebaseProvider) {    
    this.fireabaseProvider.getAll().subscribe(items => {
      this.teams = new Array<Team>();
      items.forEach(element => {
        const payload: any = element.payload.val();
        payload.key = element.key;
        if (payload.Ativa) {
          const team: Team = new Team();
          team._init(payload);
          this.teams.push(team);
        }
      });
      this.teams.sort((teamA: Team, teamB: Team) => {
        let qtdA: number = 0;
        let qtdB: number = 0;
        teamA.getMarkers().forEach(marker => {
          marker.isRespondido() && marker.isCorreto() && ++qtdA;
        });
        teamB.getMarkers().forEach(marker => {
          marker.isRespondido() && marker.isCorreto() && ++qtdB;
        });
        teamA.setScore(qtdA);
        teamB.setScore(qtdB);
        return qtdB - qtdA;
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  back() {
    this.navCtrl.pop();
  }

}
