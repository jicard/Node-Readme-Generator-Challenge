// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a summary of how the project functions.",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install and run your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What will this project be used for?",
    },
    {
        type: "input",
        name: "contributions",
        message: "Who/what contributed to your project?",
    },
    {
        type: "input",
        name: "testing",
        message: "How do you test your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project abide by?",
        choices: ["MIT", "CC", "Apache-2.0", "BSL-1.0", "ISC", "Mozilla 2.0", "None"]
    },
    {
        type: "input",
        name: "github_username",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(error);
        console.log("README.md has been created.")
    })
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const rmInfo = generateMarkdown(response)
        return rmInfo
    })
.then(rmInfo => writeToFile('README.md', rmInfo))
}

// Function call to initialize app
init();