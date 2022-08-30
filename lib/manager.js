const Employee = require("./employee");

class Manager extends Employee {
  constructor(employee) {
    super(employee);
    this.officeNum = employee.extra;
  }

  getOfficeNumber() {
    console.log(`Office Number: ${this.officeNum}`);
    return `${this.officeNum}`;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
