const Employee = require("../lib/Employee");

describe("Initialization", () => {
  it("should create an object with 'name', 'id', and 'email' property set to the corresponding values in the employee object passed in", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Employee({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
    });

    //assert
    expect(person.name).toBe(str1);
    expect(person.id).toBe(str2);
    expect(person.email).toBe(str3);
  });
});

describe("Get functions", () => {
  it("should return the current employee's name, id, and email", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";
    const str4 = "Employee";

    //act
    const person = new Employee({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
    });
    //assert
    expect(person.getName()).toEqual(str1);
    expect(person.getId()).toEqual(str2);
    expect(person.getEmail()).toEqual(str3);
    expect(person.getRole()).toEqual(str4);
  });
});
