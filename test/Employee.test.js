const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should create an object when initialized", () => {
    const test = new Employee();
    expect(typeof test).toBe("object");
  });

  it("Should get the Employee's name when running the function getName", () => {
    const test = new Employee("Victor");
    expect(test.getName()).toBe("Victor");
  });

  it("Should get the Employee's ID when running the function getId", () => {
    const test = new Employee("12345");
    expect(test.getName()).toBe("12345");
  });

  it("Should get the Employee's role back when running the function getRole", () => {
    const test = new Employee();
    expect(test.getRole()).toBe("Employee");
  });

  it("Should pull the Employee's name", () => {
    const test = new Employee("Victor");
    expect(test.name).toBe("Victor");
  });

  it("Should get me the Employee's ID", () => {
    const test = new Employee("Victor", 12345);
    expect(test.id).toBe(12345);
  });
});
