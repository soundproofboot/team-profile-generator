const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("check properties on Intern instance", () => {
  let intern = new Intern("test name", 1234, "test@test.com", "test school");

  expect(intern.name).toBe("test name");
  expect(intern.id).toBe(1234);
  expect(intern.email).toBe("test@test.com");
  expect(intern.school).toBe("test school");
});

test("check getSchool() method on intern", () => {
  let intern = new Intern("test name", 1234, "test@test.com", "test school");

  expect(inter.getSchool()).toBe("test school");
});
