"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testapichild2_1 = require("testapichild2");
function fStudents(fname, sname) {
    // private fName: string;
    // private lName: string;
    // constructor(fname: string, lname: string){
    //     this.fName = fname;
    //     this.lName = lname;
    // }
    // getFullName():string{
    //     return this.fName.concat(this.lName);
    // }
    let s1 = new testapichild2_1.Students(fname, sname);
    return s1.getFullName().concat(" \n + And on top, i add another  message from the consumer");
}
exports.fStudents = fStudents;
//# sourceMappingURL=Students.js.map