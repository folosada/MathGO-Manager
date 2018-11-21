export class Team {
    private key: string;
    private name: string;
    private members: Array<string>;
    private editableName: string;

    constructor() {
        this.members = new Array<string>();
    }

    public _init(object: any) {
        this.setKey(object.key);
        this.setName(object.name);
        this.setEditableName(object.editableName);
        this.members = !object.members ? new Array<string>() : object.members;
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

    public addMember(member: string) {
        this.members.push(member);
    }

    public getMembers(): string[] {
        return this.members;
    }
    
    public removeMember(member: string) {
        const index: number = this.members.indexOf(member);
        this.members.splice(index, 1);
    }
}