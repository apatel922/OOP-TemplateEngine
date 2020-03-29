
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    // github // GitHub username
    constructor(name, id, email, github) {  
      super(name, id, email);
      this.github = github;
    }
  }


// getGithub()
Engineer.prototype.getGithub = function () {
    return this.github;
}

// getRole() // Overridden to return 'Engineer'
Engineer.prototype.getRole = function () {
    return "Engineer";
}

var newEngi = new Engineer("Gimli", 1, "test@test.com", "GitHubUser");

console.log(newEngi);
newEngi.getGithub();
newEngi.getRole();


module.exports = Engineer;
