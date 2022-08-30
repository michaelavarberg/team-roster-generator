class Employee {
  constructor(employee) {
    this.name = employee.name;
    this.id = employee.id;
    this.email = employee.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
