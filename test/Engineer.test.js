const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should create an object when initialized", () => {
    const test = new Engineer();
    expect(typeof test).toBe("object");
  });

  it("Should get engineer github value", () => {
    const engineer = new Engineer(
      "Victor",
      123456,
      "eng@mail.com",
      "victoreng"
    );

    expect(engineer.getGithub()).toEqual(
      expect.stringContaining(engineer.github.toString())
    );
  });
  it("gets role of employee", () => {
    const engineer = new Engineer(
      "Victor",
      123456,
      "eng@mail.com",
      "victoreng"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
