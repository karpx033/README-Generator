// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
// const generateMarkdown = require('./utils/generateMarkdown.js');
const genMark = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project', 
    'Give a description of your project', 
    'What installation requirements do you require?', 
    'What liscence does your project have?', 
    'How do you contribute to the application?',
    'What is your usage information?',
    'What tests do you still need to conduct on your application?',
    'What is your GitHub username?',
    'What is your email?',
    'How do I reach you with questions?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successful");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "install"
        },
        {
            type: "list",
            message: questions[3],
            name: "license",
            choices: ["Apache", "Boost", "MIT", "N/A"]
        },
        {
            type: "input",
            message: questions[4],
            name: "contributing"
        },
        {
            type: "input",
            message: questions[5],
            name: "usage"
        },
        {
            type: "input",
            message: questions[6],
            name: "tests"
        },
        {
            type: "input",
            message: questions[7],
            name: "github"
        },
        {
            type: "input",
            message: questions[8],
            name: "email"
        },
        {
            type: "input",
            message: questions[9],
            name: "questions"
        },
    ])
    .then((answers) => {
        var fileName = answers.title;
        var data = answers;
        genMark(data);
        var data = genMark(data);
        writeToFile(fileName, data);
       
    })
    .catch(err => {
        console.log(err);
    })



};

// Function call to initialize app
init();
