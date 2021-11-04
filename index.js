const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team-member-profile.html");
const template = require("./src/pageTemplate");
const generateHTML = require("./src/generateHTML");

const teamMembersArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager e-mail?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?",
      },
    ])
    .then((answersObj) => {
      const newManager = new Manager(
        answersObj.managerName,
        answersObj.managerId,
        answersObj.managerEmail,
        answersObj.officeNumber
      );
      teamMembersArray.push(newManager);
      console.log(teamMembersArray);
      addNewTeamMember();
    });
}
function addNewTeamMember() {
  console.log("make a new team");
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members"],
      },
    ])
    .then((userChoiceObj) => {
      switch (userChoiceObj.teamMemberType) {
        case "Engineer": //addEngineer();
          inquirer
            .prompt([
              {
                type: "input",
                name: "engineerName",
                message: "What is the engineer name?",
              },
              {
                type: "input",
                name: "engineerId",
                message: "What is the engineer ID?",
              },
              {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer e-mail?",
              },
              {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer github user?",
              },
            ])
            .then((answersObj) => {
              const newEngineer = new Engineer(
                answersObj.engineerName,
                answersObj.engineerId,
                answersObj.engineerEmail,
                answersObj.engineerGithub
              );
              teamMembersArray.push(newEngineer);
              console.log(teamMembersArray);
              addNewTeamMember();
            });
          break;

        case "Intern": //addIntern();
          inquirer
            .prompt([
              {
                type: "input",
                name: "internName",
                message: "What is the intern name?",
              },
              {
                type: "input",
                name: "internId",
                message: "What is the intern ID?",
              },
              {
                type: "input",
                name: "internEmail",
                message: "What is the intern e-mail?",
              },
              {
                type: "input",
                name: "internSchool",
                message: "What is the intern school?",
              },
            ])
            .then((answersObj) => {
              const newIntern = new Intern(
                answersObj.internName,
                answersObj.internId,
                answersObj.internEmail,
                answersObj.internSchool
              );
              teamMembersArray.push(newIntern);
              console.log(teamMembersArray);
              addNewTeamMember();
            });
          break;
        default:
          //buildTeam();
          const htmlFile = generateHTML(teamMembersArray);
          fs.writeFileSync("teamCards.html", htmlFile);
          console.log("Your profiles had been generated!");

          process.exit();
      }
    });
}
createManager();
