const Intern = require("../lib/Intern");

describe("Inherited initialization", () => {
  it("should create an object with 'name', 'id', and 'email' inherited from the parent class Employee", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Intern({
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
  it("should set the intern's school to the value passed into the employee object at key 'extra'", () => {
    //arrange
    const str1 = "University of Denver";

    //act
    const person = new Intern({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
      extra: "University of Denver",
    });

    //assert
    expect(person.school).toEqual(str1);
  });
});

describe("Prototype functions", () => {
  it("should return the current intern's name, id, and email using prototype functions", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Intern({
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
  it("should return the current intern's school and role", () => {
    //arrange
    const str1 = "University of Denver";
    const str2 = "Intern";

    //act
    const person = new Intern({
      extra: "University of Denver",
    });
    //assert
    expect(person.getSchool()).toEqual(str1);
    expect(person.getRole()).toEqual(str2);
  });
});
