const Manager = require("../lib/Manager");

describe("Inherited initialization", () => {
  it("should create an object with 'name', 'id', and 'email' inherited from the parent class Employee", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Manager({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
    });

    //assert
    expect(person.name).toEqual(str1);
    expect(person.id).toEqual(str2);
    expect(person.email).toEqual(str3);
  });
});

describe("Subclass Initialization", () => {
  it("should set the manager's office number to the value passed into the employee object at key 'extra'", () => {
    //arrange
    const str1 = "333-444-5555";

    //act
    const person = new Manager({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
      extra: "333-444-5555",
    });

    //assert
    expect(person.officeNum).toEqual(str1);
  });
});

describe("Prototype functions", () => {
  it("should return the current manager's name, id, and email using prototype functions", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Manager({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
    });
    //assert
    expect(person.getName()).toEqual(str1);
    expect(person.getId()).toEqual(str2);
    expect(person.getEmail()).toEqual(str3);
  });
});

describe("Subclass functions", () => {
  it("should return the current manager's office number and role", () => {
    //arrange
    const str1 = "333-444-5555";
    const str2 = "Manager";

    //act
    const person = new Manager({
      extra: "333-444-5555",
    });
    //assert
    expect(person.getOfficeNumber()).toEqual(str1);
    expect(person.getRole()).toEqual(str2);
  });
});
