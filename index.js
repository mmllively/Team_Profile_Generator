const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// function for creating manager - inquirer questions
// take those questions and create a new Manager with the user provided answers
// push that new Manager to the team members array

// follow the same pattern for each type of employee
// build a function for them that uses inquirer

// STRUCTURING IT

// start with manager function, since every team needs a manager

function startQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office phone number",
        name: "phone",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      menuFunction();
    });
}
// at the end of manager function, call a menuFunction function
// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

function menuFunction() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What position would you like to add?",
        choices: ["Intern", "Engineer", "None"],
        name: "choice",
      },
    ])
    .then((answer) => {
      // console.log(answer)
      if (answer.choice === "Engineer") {
        engineerQuestions();
      } else if (answer.choice === "Intern") {
        internQuestions();
      } else {
        completeMenu();
      }
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their github username?",
        name: "github",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      menuFunction();
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What school do they attend?",
        name: "school",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      menuFunction();
    });
}


// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js

//this writes the HTML because it's the last option

//push into list

// Then we pass the array into the function that generates the content
// Afterwards generate the HTML file

function completeMenu() {
  console.log(teamMembers);
  fs.writeFileSync(distPath, render(teamMembers), "utf-8");
}

startQuestions();
// completeMenu();
