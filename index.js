// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions.js');
const genMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// Completed on questions js file


function userData() {
    // use inquirer.prompt to get user readme information
    inquirer.prompt(questions)
    .then((answer) => {
        
        const mdData = genMarkdown(answer);
    
    // Call write to function
    writeToFile('./README.md', mdData);
    });


}

// TODO: Create a function to write README file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
        if (err) return console.log(err);
    }
)};

// TODO: Create a function to initialize app
function init() {
    // start getting user input
    userData();
}

// Function call to insitialize app
init();
