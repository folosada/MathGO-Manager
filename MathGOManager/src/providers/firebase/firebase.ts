import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import { Member } from '../../app/model/Member';

@Injectable()
export class FirebaseProvider {

  private PATH = 'equipes/';  

  constructor(private db: AngularFireDatabase) {
  }

  public getAll(): Observable<any> {
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
  public saveName(key: string, name: string) {
    this.db.list(this.PATH).update(key, { editableName: name });
  }

  public insertMember(key: string, member: Array<Member>) {    
    this.db.list(this.PATH).update(key, { members: member});    
  }

  public removeMember(key: string, memberName: string) {
    const membersList = this.db.list(this.PATH + key + '/members/').valueChanges();
    const subscription = membersList.subscribe(members => {      
      const index: number = members.findIndex((element: any) => {
        const member = element;
        return member.name === memberName;
      });
      members.splice(index, 1);
      return this.db.list(this.PATH + key).set('members', members).then(() => {
        subscription.unsubscribe();
      });
    });    
  }

  public reset() {
    const subscription = this.db.list(this.PATH, ref => ref.orderByChild('name')).snapshotChanges().subscribe(teams => {
      teams.forEach(team => {
        const teamValue: any = team.payload.val();
        teamValue.editableName = null;
        teamValue.members = null;
        teamValue.Marcadores = null;
        teamValue.Ativa = false;        
        this.db.list(this.PATH).set(team.key, teamValue);
      });
      subscription.unsubscribe();
    });    
  }
}
