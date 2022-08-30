const Employee = require("./employee");

class Intern extends Employee {
  constructor(employee) {
    super(employee);
    this.school = employee.extra;
    this.role = "Intern";
  }
}
module.exports = Intern;
