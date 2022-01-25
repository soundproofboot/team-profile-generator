const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const prompt = require('./prompt');


let mockManager = {
    managerName: 'Dave Foley',
    managerID: 1,
    managerEmail: 'dodododo',
    managerOfficeNumber: 2
}

let mockEngineer = {
    engineerName: 'Bruce McCulloch',
    engineerID: 55,
    engineerEmail: 'bruce@gmail',
    engineerGithub: 'bruceybaby'
}

let mockIntern = {
    internName: 'Marck Mckinney',
    internID: 1234,
    internEmail: 'duder',
    internSchool: 'school place'
}

const team = {
    addManager(obj) {
        let { managerName, managerID, managerEmail, managerOfficeNumber } = obj
        return new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
    },

    addEngineer(obj) {
        let { engineerName, engineerID, engineerEmail, engineerGithub } = obj;
        return new Engineer (engineerName, engineerID, engineerEmail, engineerGithub);
    },

    addIntern(obj) {
        let { internName, internID, internEmail, internSchool } = obj;
        return new Intern (internName, internID, internEmail, internSchool);
    },

    async build() {
        let teamArray = [];
        let data = await prompt.getAnswers();
        teamArray.push(this.addManager(data.managerData));
        let employeeArray = data.employees;
        for (employee of employeeArray) {
            if (employee.whichEmployee === 'Engineer') {
                let engineer = this.addEngineer(employee);
                teamArray.push(engineer);
            } else {
                if (employee.whichEmployee === 'Intern') {
                    let intern = this.addIntern(employee);
                    teamArray.push(intern);
                }
            }
        }
        return teamArray;
    },
}

module.exports = team;