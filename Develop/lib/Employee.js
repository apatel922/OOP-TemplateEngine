
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

// getName()
Employee.prototype.getName = function () {
    // console.log(this.name);
    return this.name;
}

// getId()
Employee.prototype.getId = function () {
    return this.id;
}

// getEmail()
Employee.prototype.getEmail = function () {
    return this.email;
}

// getRole() // Returns 'Employee' 
Employee.prototype.getRole = function () {
    return "Employee";
}

// Bring Alice to life
var crazyAlice = new Employee("Alice", 100, "test@test.com");

crazyAlice.getName();
crazyAlice.getId();
crazyAlice.getEmail();
crazyAlice.getRole();


module.exports = Employee;
