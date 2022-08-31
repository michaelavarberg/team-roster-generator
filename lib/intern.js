const Employee = require("./Employee");

class Intern extends Employee {
  constructor(employee) {
    super(employee);
    this.school = employee.extra;
  }

  getSchool() {
    return `${this.school}`;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
