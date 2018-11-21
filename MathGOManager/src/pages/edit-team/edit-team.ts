import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '../../app/model/Team';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the EditTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-team',
  templateUrl: 'edit-team.html',
})
export class EditTeamPage {

  private team: Team;
  private readOnly: boolean;
  private memberName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider) {
    this.team = new Team();
    this.team._init(navParams.get('team'));
    this.readOnly = navParams.get('readOnly');    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTeamPage');
    this.navCtrl.name = `Editar equipe - ${this.team.getEditableName() || this.team.getName() }`;
  }

  addMember() {
    if (this.memberName) {
      this.team.addMember(this.memberName);
      this.memberName = '';
    }
  }

  deleteMember(member: string) {
    this.team.removeMember(member);
    this.firebaseProvider.remove(this.team.getKey(), member);
  }

}
