
function Employee (name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
}

// getName()
Employee.prototype.getName = function () {}

// getId()
Employee.prototype.getID = function () {}

// getEmail()
Employee.prototype.getEmail = function () {}

// getRole() // Returns 'Employee' 
Employee.prototype.getRole = function () {}



var e = new Employee("Alice", 100, "Engineer");



module.exports = Employee;
