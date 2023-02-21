/** @format */

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const sections = [
  "Insert the description of your project",
  "Insert the installation process",
  "Insert the usage process",
  "Insert the license type",
  "Insert the list of contributors",
  "Insert the types of tests",
];
const questions = [
  "Insert the title of the project",
  ...sections,
  "Insert your username",
  "Insert your email",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log("Check the new generatedREADME file!");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "list",
        name: "license",
        message: questions[4],
        choices: [
          "GNU GPL",
          "MIT License",
          "Boost Software License 1.0",
          " Creative Commons Zero",
          "Eclipse Public License",
          "The Unlicense",
        ],
      },
      {
        type: "input",
        message: questions[5],
        name: "contributing",
      },
      {
        type: "input",
        message: questions[6],
        name: "tests",
      },
      {
        type: "input",
        message: questions[7],
        name: "username",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ])

    .then((response) =>
      writeToFile("./utils/generatedREADME.md", generateMarkdown(response))
    );
}

// function call to initialize program
init();
