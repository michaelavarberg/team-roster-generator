const Employee = require("./employee");

class Manager extends Employee {
  constructor(employee) {
    super(employee);
    this.officeNum = employee.extra;
    this.role = "Manager";
  }
}
module.exports = Manager;
