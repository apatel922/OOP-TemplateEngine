// Runs the application.
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var inquirer = require("inquirer");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is their name?",
      name: "Name"
    },
    {
        type: "input",
        message: "What is their role?",
        name: "Role"
    },
    {
        type: "input",
        message: "What is their ID?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is their school, github or office number?",
        name: "Role-specific"
    }
  ])
  .then(function(response) {
    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });