// TODO: Include packages needed for this application
const fs = require('fs');
// import inquirer from 'inquirer';
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

// const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
        default: 'GitHub username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        default: 'google@gmail.com',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title',
        default: 'Title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
        default: 'Description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ["MIT", "not MIT","Third Option"],
        default: [0],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'instal',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
        default: 'run npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
        default: 'make a pr',
    },
  ])
  .then((userAnswers) => {
    // console.log('Success!')
    const addAnswersToMarkDown = markDown.generateMarkdown(userAnswers);
    // console.log(addAnswersToMarkDown);
    fs.writeFile('README.md', addAnswersToMarkDown, (err) =>
  err ? console.error(err) : console.log('Generating README...')
);
    return userAnswers;
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
