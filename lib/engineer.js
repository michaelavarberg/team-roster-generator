const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(employee) {
    super(employee);
    this.github = employee.extra;
  }

  getGithub() {
    return `${this.github}`;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
