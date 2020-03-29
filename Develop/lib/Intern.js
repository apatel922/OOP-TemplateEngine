
const Employee = require("../lib/Employee");

class Intern extends Employee {
    // school
    constructor(name, id, email, school) {  
      super(name, id, email);
      this.school = school;
    }
}

// getSchool()
Intern.prototype.getSchool = function () {
    return this.school;
}

// getRole() // Overridden to return 'Intern'
Intern.prototype.getRole = function () {
    return "Intern";
}


var newIntern = new Intern("Gimli", 1, "test@test.com", "GitHubUser");

console.log(newIntern);
newIntern.getSchool();
newIntern.getRole();

module.exports = Intern;
