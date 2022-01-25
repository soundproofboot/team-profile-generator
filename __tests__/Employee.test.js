const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('checks Employee properties are set', () => {
    let employee = new Employee('Dave');

    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
});

test('checks getName() method on Employee', () => {
    let employee = new Employee('Test Name', 1234, 'test@test.com');
    expect(employee.getName()).toBe('Test Name');
});

test('checks getId() method on Employee', () => {
    let employee = new Employee('Test Name', 1234, 'test@test.com');
    expect(employee.getId()).toBe(1234);
})

test('checks getEmail() method on Employee', () => {
    let employee = new Employee('Test Name', 1234, 'test@test.com')
    expect(employee.getEmail()).toBe('test@test.com');
})