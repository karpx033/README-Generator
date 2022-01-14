// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project', 'Give a description of your project', 'What languages does your project use?', 'What liscences does your project have?', 'Who contributed to your project?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var readmeName = fileName +'.md';
    fs.writeFile(readmeName, data, (err) => {
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
            type: "input",
            message: questions[3],
            name: "title"
        },
    ])
    .then((answers) => {
        console.log(answers);
        var fileName = answers.title;
         console.log(fileName);
        var data = answers;
        console.log(data);
        writeToFile(fileName, data);
        
})};

// Function call to initialize app
init();
