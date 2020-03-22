// const Employee = { 
//     name:"Alice", 
//     id:"123",
//     title: "" 
// }; 

function Employee (name, id, title) {
    this.newName = name;
    this.newID = id;
    this.newTitle = title;
}

var alice = new Employee("Alice", 100, "");

Employee.prototype.getName = function () {
    console.log("Name: " + this.newName + "\nID: " + this.newID + "\nTitle: " + this.newTitle);
}


// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee' 