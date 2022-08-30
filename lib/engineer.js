const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;
  }
}
