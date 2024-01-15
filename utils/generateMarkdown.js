// TODO: Create a function that returns a license badge based on which license is passed in

const questions = require("./questions");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Return a link tag in markdown that simply scrolls down to a header with the name of ##License
  if (license) {
    return '[License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Return the license section of markdown
  return `
  ## License
  
  Licensed under the ${license} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}
 ## Table of Contents
 -[Description](#description)\n
 -[Instillation](#installation)\n
 -[Usage](#usage)\n
 -[License](#license)\n
 -[Contributing](#contributing)\n
 -[Testing](#testing)\n
 -[Questions](#questions)\n
 ## Description 
 ${answer.description}
 ## Installation
 ${answer.installation}
 ## Usage
 ${answer.usage}
 ## License
 ${renderLicenseBadge(answer.license)}
 ## Contributing
 ${answer.contributing}
 ## Testing
 ${answer.testing}
 ## Questions
 ${answer.questions}

 
`;
}
// *Only generate markdown file is being exported

module.exports = generateMarkdown;
