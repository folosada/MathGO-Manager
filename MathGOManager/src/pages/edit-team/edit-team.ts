import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '../../app/model/Team';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Member } from '../../app/model/Member';

@IonicPage()
@Component({
  selector: 'page-edit-team',
  templateUrl: 'edit-team.html',
})
export class EditTeamPage {

  private team: Team;
  private readOnly: boolean;
  private memberName: string;
  private teamName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider) {
    this.team = new Team();    
    this.team._init(navParams.get('team'));
    this.readOnly = navParams.get('readOnly');
    this.teamName = this.team.getEditableName() || this.team.getName();
  }

  saveName(event) {    
    this.firebaseProvider.saveName(this.team.getKey(), event.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTeamPage');
    this.navCtrl.name = `Editar equipe - ${this.team.getEditableName() || this.team.getName() }`;
  }

  addMember() {
    if (this.memberName) {
      this.team.addMember(this.memberName);
      this.firebaseProvider.insertMember(this.team.getKey(), this.team.getMembers());
      this.memberName = '';
    }
  }

  deleteMember(member: Member) {
    this.team.removeMember(member.getName());
    this.firebaseProvider.removeMember(this.team.getKey(), member.getName());
  }

  back() {
    this.navCtrl.pop();
  }

}
