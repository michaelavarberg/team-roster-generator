const generatePage = require("./generatePage");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
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

function addEngineerPrompts() {}

function addInternPrompts() {}

init();
