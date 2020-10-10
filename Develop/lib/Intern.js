// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");

class Intern extends Employee {

    constructor(school){
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";

    }
}

module.exports = {intern : Intern}