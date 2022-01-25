const inquirer = require("inquirer");

let firstQuestions = [
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
  {
    type: "confirm",
    name: "addMore",
    message: "Would you like to add more employees to the team profile?",
    default: true,
  },
];

let followUpQs = [
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
  {
    type: "confirm",
    name: "addMore",
    message: "Would you like to add more employees to the team profile?",
    default: true,
  },
];

async function getAnswers() {
    let team = {};
    let managerData = await getManager();
    team.managerData = managerData;
    if (managerData.addMore) {
        let additionalData = await getEmployee();
        team.employee = [additionalData];
    }
    return team;
}

function getManager() {
    return inquirer.prompt(firstQuestions);
}

function getEmployee() {
    return inquirer.prompt(followUpQs);
}



getAnswers().then(x => console.log(x));