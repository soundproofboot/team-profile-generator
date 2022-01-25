const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

let manager1 = new Manager('dave', 1234, 'test', 21);
console.log(manager1);
console.log(manager1.getRole());
module.exports = Manager;