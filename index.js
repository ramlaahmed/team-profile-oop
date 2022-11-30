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
        message: 'Who is the manager of this team?'
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
        message: 'Whats the name of the engineer?'
    },

    {
        type: 'input',
        name: 'engineerID',
        message: 'Please enter the ID number for this engineer?'
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter the email address for this engineer?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter this engineers GitHub user name?'
    },
]


const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Whats the name of this intern?'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Please enter the ID number for this intern?',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'please enter the email address for this intern?'
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

function next() {
    
    inquirer.prompt(engineerQuestions).then((response) => {
        console.log(response);
        switch (response.nextEngineer) {
            case 'Engineer':
                engineerPromt();
                break;
            case 'Intern':
                internPromt();
                break;
            case 'Done':
                console.log('Creating your team!')
                makeTeam();
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
          message: "what members do you want to add?",
          choices: ["Engineer", "Intern", "Not at this time"],
        },
      ])
      .then((val) => {
        if (val.teammembers === "Engineer") {
          engineerPrompt();
        } else if (val.teammembers === "Intern") {
          internPrompt();
        } else {
          makeTeam();
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
fs.writeFile('index.html', render(teamArray), function(err) {
if (err) { 
    return console.log(err)
}
})}

init();