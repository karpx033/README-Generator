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
    'What languages does your project use?', 
    'What liscences does your project have?', 
    'Who contributed to your project?'];

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
            name: "languages"
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
            name: "contributors"
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
