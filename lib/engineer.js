const Employee = require("./employee");

class Engineer extends Employee {
  constructor(employee) {
    super(employee);
    this.github = employee.extra;
    this.role = "Engineer";
  }
}
module.exports = Engineer;
