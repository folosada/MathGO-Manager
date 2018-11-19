class Team {
    private name: string;
    private members: Array<string>;

    constructor() {
        this.members = new Array<string>();
    }
    
    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public addMember(member: string) {
        this.members.push(member);
    }

    public getMembers(): string[] {
        return this.members;
    }
}