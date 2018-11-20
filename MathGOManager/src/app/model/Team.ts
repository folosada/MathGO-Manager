class Team {
    private name: string;
    private members: Array<string>;
    private editableName: string;

    constructor() {
        this.members = new Array<string>();
    }

    public _init(object: any) {
        this.name = object.name;
        this.editableName = object.editableName;
        this.members = !object.members ? new Array<string>() : object.members;
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
}