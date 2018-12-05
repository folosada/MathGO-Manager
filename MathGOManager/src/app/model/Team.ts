import { Member } from './Member';
import { Marker } from './Marker';

export class Team {
  private key: string;
  private name: string;
  private members: Array<Member>;
  private editableName: string;
  private markers: Array<Marker>;
  private score: number;

  constructor() {
    this.members = new Array<Member>();
  }

  public _init(object: any) {
    this.setKey(object.key);
    this.setName(object.name || object.Nome);
    this.setEditableName(object.editableName);
    if (object.members && object.members[0]) {
      this._initMembers(object.members);
    }
    if (object.Marcadores && object.Marcadores[0]) {
      this._initMarkers(object.Marcadores);
    }
  }

  public setKey(key: string) {
    this.key = key;
  }

  public getKey() {
    return this.key;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setEditableName(name: string) {
    this.editableName = name;
  }

  public getEditableName() {
    return this.editableName;
  }

  public addMember(name: string) {
    const member: Member = new Member();
    member.setName(name);
    this.members.push(member);
  }

  public getMembers(): Member[] {
    return this.members;
  }

  public removeMember(name: string) {
    const index: number = this.members.findIndex((member: Member) => {
      return member.getName() === name;
    });
    this.members.splice(index, 1);
  }

  public getMarkers(): Marker[] {
    return this.markers;
  }

  private _initMembers(members: Array<any>) {
    this.members = new Array<Member>();
    members.forEach(element => {
      const member = new Member();
      member.setName(element.name);
      this.members.push(member);
    })
  }

  private _initMarkers(markers: Array<any>) {
    this.markers = new Array<Marker>();
    markers.forEach(element => {
      const marker: Marker = new Marker();
      marker._init(element);
      this.markers.push(marker);
    })
  }

  public setScore(score: number): void {
    this.score = score;
  }

  public getScore(): number {
    return this.score;
  }
}