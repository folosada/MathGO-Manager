export class Member {
  name: string;

  public _init(member) {
    this.name = member.member;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string)  {
    this.name = name;
  }
}