const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let employeesArray = [];

init();
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
        choices: ["Add an Engineer", "Add an Intern", "Finalize my page"],
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
        choices: ["Add an Engineer", "Add an Intern", "Finalize my page"],
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
        choices: ["Add an Engineer", "Add an Intern", "Finalize my page"],
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

function generatePage(array) {
  console.log(array);
}

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <script src="https://kit.fontawesome.com/0f98f481f3.js" crossorigin="anonymous"></script>
    <title>Staff Directory</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main class="d-flex justify-content-center">
        <!-- example card -->
      <div class="card m-3 shadow" style="width: 18rem">
        <!-- title with name and role -->
        <div class="card-header text-white bg-info">
          <h3>Name</h3>
          <div class = "d-flex align-items-center">
            <i class="fa-solid fa-briefcase"></i>
            <!-- <i class="fa-solid fa-display-code"></i> -->
            <!-- <i class="fa-solid fa-graduation-cap"></i> -->
            <h4 class = "m-1">Role</h4>
          </div>
          
        </div>
        <!-- list with three items -->
        <ul class="list-group list-group-flush m-3">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      
    </main>
    <!-- added jQuery version 3.6.1 instead of 3.5.1 like bootstrap suggested. Change back if there are issues. -->
    <script
      src="https://code.jquery.com/jquery-3.6.1.slim.min.js"
      integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
