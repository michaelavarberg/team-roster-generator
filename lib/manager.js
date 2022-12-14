const Employee = require("./Employee");

class Manager extends Employee {
  constructor(employee) {
    super(employee);
    this.officeNum = employee.extra;
  }

  getOfficeNumber() {
    return `${this.officeNum}`;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
