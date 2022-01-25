const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("checks for properties on Engineer instance", () => {
  let engineer = new Engineer(
    "Test Name",
    1234,
    "test@test.com",
    "githubaccounttest"
  );

  expect(engineer.name).toBe("Test Name");
  expect(engineer.id).toBe(1234);
  expect(engineer.email).toBe("test@test.com");
  expect(engineer.github).toBe("githubaccounttest");
});

test("checks getRole() method on engineer", () => {
  let engineer = new Engineer(
    "Test Name",
    1234,
    "test@test.com",
    "githubaccounttest"
  );
  expect(engineer.getRole()).toBe('Engineer');
});
