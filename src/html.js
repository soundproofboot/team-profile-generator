const team = require("./team");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

let mockManager = new Manager("dave", 1, "dodo", 2);
let mockEngineer = new Engineer("steve", 2, "email", "baby");
let mockIntern = new Intern("josh", 3, "emailforjosh", "schoolplace");

let mockArray = [mockManager, mockEngineer, mockIntern];

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

  async body(arr) {
    let htmlString = "";
    for (let empl of arr) {
      if (empl.getRole() === "Manager") {
        htmlString += this.managerHTML(empl);
      } else if (empl.getRole() === "Engineer") {
        htmlString += this.engineerHTML(empl);
      } else {
        htmlString += this.internHTML;
      }
    }
    return htmlString;
  },

  async buildPage() {
    let htmlString = ''
    let employeeArray = await team.build();
    let employeeHTML = await this.body(employeeArray);

    htmlString += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    </head>
    <body>
    <header>My Team</header>
    ${employeeHTML}
    </body>
    </html>
    `;
    return htmlString;
  },
};


html.buildPage().then(x => console.log(x));

module.exports = html;