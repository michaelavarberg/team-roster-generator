const generatePage = require("./generatePage");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let employeesArray = [];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        validate(answer) {
          if (!answer) {
            return "Please enter the manager's name.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager's id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "extra",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "next",
        choices: ["Add an Engineer", "Add an intern", "Finalize my page"],
      },
    ])
    .then((response) => {
      const manager = new Manager(response);
      employeesArray.push(manager);
      if (response.next === "Finalize my page") {
        generatePage(employeesArray);
      } else if (response.next === "Add an Engineer") {
        addEngineerPrompts();
      } else {
        addInternPrompts();
      }
    });
}

function addEngineerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is this engineer's id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is this engineer's github username?",
        name: "extra",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "next",
        choices: ["Add an Engineer", "Add an intern", "Finalize my page"],
      },
    ])
    .then((response) => {
      const engineer = new Engineer(response);
      employeesArray.push(engineer);
      if (response.next === "Finalize my page") {
        generatePage(employeesArray);
      } else if (response.next === "Add an Engineer") {
        addEngineerPrompts();
      } else {
        addInternPrompts();
      }
    });
}

function addInternPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is this intern's id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "Where does this intern attend school?",
        name: "extra",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "next",
        choices: ["Add an Engineer", "Add an intern", "Finalize my page"],
      },
    ])
    .then((response) => {
      const intern = new Intern(response);
      employeesArray.push(intern);
      if (response.next === "Finalize my page") {
        generatePage(employeesArray);
      } else if (response.next === "Add an Engineer") {
        addEngineerPrompts();
      } else {
        addInternPrompts();
      }
    });
}

init();
