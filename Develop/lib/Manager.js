
const Employee = require("../lib/Employee");

class Manager extends Employee {
    // officeNumber
    constructor(name, id, email, officeNumber) {  
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
}

// getOfficeNumber()
Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
}

// getRole() // Overridden to return 'Manager'
Manager.prototype.getRole = function () {
    return "Manager";
}

var newMan = new Manager("Boromir", 1, "test@test.com", 100);

console.log(newMan);
newMan.getRole();

module.exports = Manager;
