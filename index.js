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
        message: 'What is your name?',
        name: 'userName',
        default: 'Doof',
    },
    {
        type: 'input',
        message: 'What kind of file do you want to make?',
        name: 'fileType',
        default: 'a good one',
    },
  ])
  .then((userAnswers) => {
    // console.log('Success!')
    const addAnswersToMarkDown = markDown.generateMarkdown(userAnswers);
    console.log(addAnswersToMarkDown);
    fs.writeFile('README.md', addAnswersToMarkDown, (err) =>
  err ? console.error(err) : console.log('Success!')
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
