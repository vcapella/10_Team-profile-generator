const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Should create an object when initialized", () => {
    const test = new Intern();
    expect(typeof test).toBe("object");
  });

  it("Should get school value", () => {
    const intern = new Intern("Victor", 1234567, "intern@mail.com", "UofT");

    expect(intern.getSchool()).toEqual(
      expect.stringContaining(intern.school.toString())
    );
  });
  it("gets role of employee", () => {
    const intern = new Intern("Victor", 1234567, "intern@mail.com", "UofT");

    expect(intern.getRole()).toEqual("Intern");
  });
});
