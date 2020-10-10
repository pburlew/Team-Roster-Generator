// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee");

class Manager extends Employee{

    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

}

module.exports = Manager;