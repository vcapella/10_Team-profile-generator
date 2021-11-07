const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Should create an object when initialized", () => {
    const test = new Manager();
    expect(typeof test).toBe("object");
  });

  it("Should get office number value", () => {
    const manager = new Manager("Victor", 1234567, "manager@mail.com", 123);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });
  it("gets role of employee", () => {
    const manager = new Manager("Victor", 1234567, "manager@mail.com", 123);

    expect(manager.getRole()).toEqual("Manager");
  });
});
