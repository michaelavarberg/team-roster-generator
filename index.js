const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let employeesArray = [];

init();

//Asks user prompts in terminal and stores manager in the employees array
function init() {
  console.log(`Welcome to Team Roster Generator!
  Respond to the following prompts to add employees to your webpage.
  
  We'll start with your team's manager:`);
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        validate(answer) {
          if (!answer) {
            return "Please enter the manager's name.";
          } else if (/\d/.test(answer) === true) {
            return "Manager's name should not contain numbers.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager's id number?",
        name: "id",
        validate(answer) {
          if (!answer) {
            return "Please enter the manager's id.";
          } else if (/[a-zA-Z]/.test(answer) === true) {
            return "Manager's id should not contain letters.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
        validate(answer) {
          if (!answer) {
            return "Please enter the manager's email.";
          } else if (
            answer.includes("@") === false ||
            answer.includes(".") === false
          ) {
            return "Manager's email should include the '@' symbol and at least one '.'.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "extra",
        validate(answer) {
          if (!answer) {
            return "Please enter the manager's office number.";
          } else if (/[a-zA-Z]/.test(answer) === true) {
            return "Manager's office number should not contain letters.";
          } else {
            return true;
          }
        },
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

// Asks user prompts in terminal and stores new engineer in the employees array
function addEngineerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this engineer's name?",
        name: "name",
        validate(answer) {
          if (!answer) {
            return "Please enter the engineer's name.";
          } else if (/\d/.test(answer) === true) {
            return "Engineer's name should not contain numbers.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is this engineer's id number?",
        name: "id",
        validate(answer) {
          if (!answer) {
            return "Please enter the engineer's id.";
          } else if (/[a-zA-Z]/.test(answer) === true) {
            return "Engineer's id should not contain letters.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is this engineer's email?",
        name: "email",
        validate(answer) {
          if (!answer) {
            return "Please enter the engineer's email.";
          } else if (
            answer.includes("@") === false ||
            answer.includes(".") === false
          ) {
            return "Engineer's email should include the '@' symbol and at least one '.'.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is this engineer's github username?",
        name: "extra",
        validate(answer) {
          if (!answer) {
            return "Please enter the engineer's github username.";
          } else {
            return true;
          }
        },
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

// Asks user prompts in terminal and stores new intern in the employees array
function addInternPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this intern's name?",
        name: "name",
        validate(answer) {
          if (!answer) {
            return "Please enter the intern's name.";
          } else if (/\d/.test(answer) === true) {
            return "Intern's name should not contain numbers.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is this intern's id number?",
        name: "id",
        validate(answer) {
          if (!answer) {
            return "Please enter the intern's id.";
          } else if (/[a-zA-Z]/.test(answer) === true) {
            return "Intern's id should not contain letters.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is this intern's email?",
        name: "email",
        validate(answer) {
          if (!answer) {
            return "Please enter the intern's email.";
          } else if (
            answer.includes("@") === false ||
            answer.includes(".") === false
          ) {
            return "Intern's email should include the '@' symbol and at least one '.'.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Where does this intern attend school?",
        name: "extra",
        validate(answer) {
          if (!answer) {
            return "Please enter the intern's school.";
          } else if (/\d/.test(answer) === true) {
            return "Intern's school name should not contain numbers.";
          } else {
            return true;
          }
        },
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

//Takes input of entire employees array and creates the html page
function generatePage(array) {
  //String that each card's html text will be added to
  let cards = ``;
  for (const employee of array) {
    const currentRole = employee.getRole();
    if (currentRole === "Manager") {
      cards += `<div class="card m-3 shadow" style="width: 18rem">
        
    <div class="card-header text-white bg-info">
      <h3>${employee.getName()}</h3>
      <div class = "d-flex align-items-center">
        <i class="fa-solid fa-briefcase"></i>
        <!-- <i class="fa-solid fa-display-code"></i> -->
        <!-- <i class="fa-solid fa-graduation-cap"></i> -->
        <h4 class = "m-1">${currentRole}</h4>
      </div>
      
    </div>
    <ul class="list-group list-group-flush m-3">
      <li class="list-group-item">ID Number: ${employee.getId()}</li>
      <li class="list-group-item">Email: <a href = "mailto:${employee.getEmail()}" target = "_blank">${employee.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
    </ul>
  </div>`;
    } else if (currentRole === "Engineer") {
      cards += `<div class="card m-3 shadow" style="width: 18rem">
        
    <div class="card-header text-white bg-info">
      <h3>${employee.getName()}</h3>
      <div class = "d-flex align-items-center">
      <i class="fa-solid fa-desktop"></i>
        <h4 class = "m-1">${currentRole}</h4>
      </div>
      
    </div>
    <ul class="list-group list-group-flush m-3">
      <li class="list-group-item">ID Number: ${employee.getId()}</li>
      <li class="list-group-item">Email: <a href = "mailto:${employee.getEmail()}" target = "_blank">${employee.getEmail()}</a></li>
      <li class="list-group-item">Github: <a href = "https://github.com/${employee.getGithub()}" target = "_blank">${employee.getGithub()}</a></li>
    </ul>
  </div>`;
    } else {
      cards += `<div class="card m-3 shadow" style="width: 18rem">
        
    <div class="card-header text-white bg-info">
      <h3>${employee.getName()}</h3>
      <div class = "d-flex align-items-center">
        <i class="fa-solid fa-graduation-cap"></i>
        <h4 class = "m-1">${currentRole}</h4>
      </div>
      
    </div>
    <ul class="list-group list-group-flush m-3">
      <li class="list-group-item">ID Number: ${employee.getId()}</li>
      <li class="list-group-item">Email: <a href = "mailto:${employee.getEmail()}" target = "_blank">${employee.getEmail()}</a></li>
      <li class="list-group-item">School: ${employee.getSchool()}</li>
    </ul>
  </div>`;
    }
  }
  console.log(array);
  const file =
    //map through array and for each type of employee have if statements (for the extra question, icon and placement?)

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
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@600&family=Quicksand&family=Roboto+Condensed&family=Roboto:wght@100&display=swap" rel="stylesheet"
    <script src="https://kit.fontawesome.com/0f98f481f3.js" crossorigin="anonymous"></script>
    <title>Staff Directory</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main class="d-flex justify-content-center">
       ${cards}
    </main>
    <script src="https://kit.fontawesome.com/0f98f481f3.js" crossorigin="anonymous"></script>
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
  fs.writeFile("./dist/team-roster.html", file, () => console.log("Done!"));
}
