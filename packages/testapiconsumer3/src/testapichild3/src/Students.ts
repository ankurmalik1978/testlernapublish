class Students{
    private fName: string;
    private lName: string;

    constructor(fname: string, lname: string){
        this.fName = fname;
        this.lName = lname;
    }

    getFullName():string{
        return this.fName.concat(this.lName).concat(" \n + This message is from the provider!!");
    }

    getNewFullName16():string{
        return this.fName.concat(this.lName).concat(" Hi there!!");
    }
}

export {Students}
