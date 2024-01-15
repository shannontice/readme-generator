const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your repo title'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description for you README file'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation information for this application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the steps to utilize this application'
    }, 
    {
        type: 'input',
        name: 'license',
        message: 'Please enter the license utilized for this application'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter steps on how to contribute to this project'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter information needed to test this projects functionality'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your github profile and email address so you can be contacted with additional questions'
    }

];

module.exports = questions;

