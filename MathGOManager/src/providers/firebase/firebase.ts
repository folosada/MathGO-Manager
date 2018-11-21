import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import { Team } from '../../app/model/Team';

@Injectable()
export class FirebaseProvider {

  private PATH = 'equipes/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll(): Observable<any> {
    return this.db.list(this.PATH, ref => ref.orderByChild('name')).snapshotChanges();
  }

  /*
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
*/
  saveName(team: Team) {
    return this.db.list(this.PATH).update(team.getKey(), { editableName: team.getEditableName() });
  }

  insertMember(key: string, member: string) {
    return this.db.list(this.PATH + key + '/members/').push({name: member});
  }

  remove(path: string, key: string) {
    return this.db.list(path).remove(key);
  }
}
