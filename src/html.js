const team = require("./team");
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let mockManager = new Manager('dave', 1, 'dodo', 2);

let mockEngineer = new Engineer('steve', 2, 'email', 'baby');
console.log(mockEngineer.getRole());

let mockIntern = new Intern('josh', 3, 'emailforjosh', 'schoolplace');
console.log(mockIntern.getRole());
const html = {
  managerHTML(managerObj) {
    let { name, id, email, officeNumber } = managerObj;
    let role = managerObj.getRole();
    return `
        <section>
        <h2>${name}</h2>
        <h3>${role}</h3>
        <div>
            <p>${id}</p>
            <p>${email}</p>
            <p>${officeNumber}</p>
        </div>
    </section>
    `;
  },

  engineerHTML(engineerObj) {
    let { name, id, email, github } = engineerObj;
    let role = engineerObj.getRole();
    return `
        <section>
        <h2>${name}</h2>
        <h3>${role}</h3>
        <div>
            <p>${id}</p>
            <p>${email}</p>
            <p>${github}</p>
        </div>
    </section>
    `;
  },

  internHTML(internObj) {
    let { name, id, email, school } = internObj;
    let role = internObj.getRole();
    return `
        <section>
        <h2>${name}</h2>
        <h3>${role}</h3>
        <div>
            <p>${id}</p>
            <p>${email}</p>
            <p>${school}</p>
        </div>
    </section>
    `;
  },
};

console.log(html.managerHTML(mockManager));
console.log(html.engineerHTML(mockEngineer));
console.log(html.internHTML(mockIntern));