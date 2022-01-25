const Manager = require('../lib/Manager');

test('check properties on Manager instance', () => {
    let manager = new Manager('Test Name', 1234, 'test@test.com', 12);
    expect(manager.name).toBe('Test Name');
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe('test@test.com');
    expect(manager.officeNumber).toBe(12);
})

test('check getRole() for Manager', () => {
    let manager = new Manager("Test Name", 1234, "test@test.com", 12);
    expect(manager.getRole()).toBe('Manager');    
})