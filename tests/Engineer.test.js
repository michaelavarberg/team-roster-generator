const Engineer = require("../lib/Engineer");

describe("Inherited initialization", () => {
  it("should create an object with 'name', 'id', and 'email' inherited from the parent class Employee", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Engineer({
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
  it("should set the engineer's github username to the value passed into the employee object at key 'extra'", () => {
    //arrange
    const str1 = "michaelavarberg";

    //act
    const person = new Engineer({
      name: "Michaela",
      id: "34567",
      email: "michaelavarberg@gmail.com",
      extra: "michaelavarberg",
    });

    //assert
    expect(person.github).toEqual(str1);
  });
});

describe("Prototype functions", () => {
  it("should return the current engineer's name, id, and email using prototype functions", () => {
    //arrange
    const str1 = "Michaela";
    const str2 = "34567";
    const str3 = "michaelavarberg@gmail.com";

    //act
    const person = new Engineer({
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
  it("should return the current engineer's github username and role", () => {
    //arrange
    const str1 = "michaelavarberg";
    const str2 = "Engineer";

    //act
    const person = new Engineer({
      extra: "michaelavarberg",
    });
    //assert
    expect(person.getGithub()).toEqual(str1);
    expect(person.getRole()).toEqual(str2);
  });
});
