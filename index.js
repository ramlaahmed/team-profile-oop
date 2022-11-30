const inquirer = require('inquirer');
const fs = require('fs'); 


const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

const render = require("./source/generateHTML");

const teamArray = []; 

const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Whats the name of the manager for this team?'
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number?'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email address?'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number?'
    },
]


const engineerQuestions = [

    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?'
    },

    {
        type: 'input',
        name: 'engineerID',
        message: 'what is the ID number for this engineer?'
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is the email address for this engineer?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'what is the engineers GitHub user name?'
    },
]


const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of this intern?'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'What is the ID number for this intern?',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email address for this intern?'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school does this intern attend?',
    },
]

function init() {
    managerPrompt();
}

function makeTeam() {
    
    inquirer.prompt(engineerQuestions).then((response) => {
        console.log(response);
        switch (response.nextEngineer) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            default: ('Created you team!');
                buildTeam();
        }
    })
}
function managerPrompt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        const manager = new Manager(name, id, email, office);
        teamArray.push(manager);
        console.log(teamArray);

        createTeam();
    })
}


function createTeam(){
    // prompt saying what members you want to add
     // engineer  - engineerPrompt() {

    // intern - internPrompt()
    // else makeTeam
    inquirer
    .prompt([
        {
          type: "list",
          name: "teammembers",
          message: "which team member do you want to add?",
          choices: ["Engineer", "Intern","Done!!"],
        },
      ])
      .then((val) =>  { 
        
        if (val.teammembers === "Engineer") {
          engineerPrompt();
        } else if (val.teammembers === "Intern") {
          internPrompt();
        } else if (val.teammembers === 'Done') {
          makeTeam();
          console.log('Created your team!!');
        }
      });

}


function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((response) => {

        let name = response. engineerName;
        let id = response.engineerID;
        let email = response.engineerEmail;
        let github = response.github;
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer);
        console.log(teamArray);
        createTeam();
    })
}

function internPrompt() {
    inquirer.prompt(internQuestions).then((response) => {

        let name = response. internName;
        let id = response.internID;
        let email = response.internEmail;
        let school = response.school;

        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        console.log(teamArray);
        createTeam();
    })
}


function makeTeam() {
fs.writeFileSync('team.html', render(teamArray), function(err) {
if (err) { 
    return console.log(err);
   
}
})}

init();