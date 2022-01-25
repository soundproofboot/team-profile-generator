const inquirer = require("inquirer");

let prompt = {
  firstQuestions: [
    {
      type: "input",
      name: "managerName",
      message: "Who is the team manager?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the manager's ID number?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?",
    },
  ],

  menuConfirm: [
    {
      type: "confirm",
      name: "addMore",
      message: "Would you like to add more employees to the team profile?",
      default: true,
    },
  ],

  followUpQs: [
    {
      type: "list",
      name: "whichEmployee",
      message: "Which role would you like to add?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Engineer") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is the engineer's ID number?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Engineer") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Engineer") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Engineer") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Intern") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internID",
      message: "What is the intern's employee ID?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Intern") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Intern") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?",
      when: ({ whichEmployee }) => {
        if (whichEmployee === "Intern") {
          return true;
        } else {
          return false;
        }
      },
    },
  ],

  async getAnswers() {
    let team = {};
    let managerData = await this.getManager();
    team.managerData = managerData;
    team.employees = [];
    let menuCheck = await this.menu();

    if (menuCheck.addMore) {
      await this.addTeamMembers(team.employees);
      return team;
    } else {
      return team;
    }
  },

  getManager() {
    return inquirer.prompt(this.firstQuestions);
  },

  getEmployee() {
    return inquirer.prompt(this.followUpQs);
  },

  menu() {
    return inquirer.prompt(this.menuConfirm);
  },

  async addTeamMembers(arr) {
    let employee = await this.getEmployee();
    arr.push(employee);

    let menuCheck = await this.menu();
    if (menuCheck.addMore) {
      await this.addTeamMembers(arr);
    } else {
      return;
    }
  },
};

// prompt.getAnswers().then(ans => console.log(ans));

module.exports = prompt;

// let firstQuestions = [
//   {
//     type: "input",
//     name: "managerName",
//     message: "Who is the team manager?",
//   },
//   {
//     type: "input",
//     name: "managerID",
//     message: "What is the manager's ID number?",
//   },
//   {
//     type: "input",
//     name: "managerEmail",
//     message: "What is the manager's email address?",
//   },
//   {
//     type: "input",
//     name: "managerOfficeNumber",
//     message: "What is the manager's office number?",
//   },
// ];

// let menuConfirm = [
//   {
//     type: "confirm",
//     name: "addMore",
//     message: "Would you like to add more employees to the team profile?",
//     default: true,
//   },
// ]

// let followUpQs = [
//   {
//     type: "list",
//     name: "whichEmployee",
//     message: "Which role would you like to add?",
//     choices: ["Engineer", "Intern"],
//   },
//   {
//     type: "input",
//     name: "engineerName",
//     message: "What is the engineer's name?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Engineer") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "engineerID",
//     message: "What is the engineer's ID number?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Engineer") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "engineerEmail",
//     message: "What is the engineer's email?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Engineer") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "engineerGithub",
//     message: "What is the engineer's GitHub username?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Engineer") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "internName",
//     message: "What is the intern's name?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Intern") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "internID",
//     message: "What is the intern's employee ID?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Intern") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message: "What is the intern's email address?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Intern") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "internSchool",
//     message: "What school does the intern attend?",
//     when: ({ whichEmployee }) => {
//       if (whichEmployee === "Intern") {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   },
// ];

// async function getAnswers() {
//     let team = {};
//     let managerData = await getManager();
//     team.managerData = managerData;
//     team.employees = [];
//     let menuCheck = await menu();

//     if (menuCheck.addMore) {
//         await addTeamMembers(team.employees);
//         return team;
//     } else {
//         return team;
//     }
// }

// function getManager() {
//     return inquirer.prompt(firstQuestions);
// }

// function getEmployee() {
//     return inquirer.prompt(followUpQs);
// }

// function menu() {
//     return inquirer.prompt(menuConfirm);
// }

// async function addTeamMembers(arr) {
//     let employee = await getEmployee();
//     arr.push(employee);

//     let menuCheck = await menu();
//     if (menuCheck.addMore) {
//         await addTeamMembers(arr);
//     } else {
//         return;
//     }
// }
// let teamData = {};
// getAnswers().then(x => {
//   teamData = x;
//   console.log('Data was retrieved and this is your team: ');
//   }
// );