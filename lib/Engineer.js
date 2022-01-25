const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

let engineer = new Engineer('test', 123, 'test', 'test');
console.log(engineer);
console.log(engineer.getRole());

module.exports = Engineer;

