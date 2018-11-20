import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = new Team();
    this.team._init(navParams.get('team'));
    this.readOnly = navParams.get('readOnly');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTeamPage');
  }

  addMember() {
    this.team.addMember(this.memberName);
  }

}
