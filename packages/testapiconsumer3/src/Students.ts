import { Students } from "testapichild3";

function fStudents (fname, sname ) : string{
    // private fName: string;
    // private lName: string;

    // constructor(fname: string, lname: string){
    //     this.fName = fname;
    //     this.lName = lname;
    // }

    // getFullName():string{
    //     return this.fName.concat(this.lName);
    // }

    let s1: Students = new Students(fname, sname);
    return s1.getFullName().concat(" \n + And on top, i add another  message from the consumer");
}

export { fStudents }