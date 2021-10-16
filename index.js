// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter github username!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description about your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "What steps are required to install your project? ",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions on how this project is used: "
        },
        {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any, with links to their GitHub profiles: "
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Boost",
                "Eclipse",
                "GNU GPL v3",
                "MIT",
                "none"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "If you would like other develops to add to this project, list guidelines:"
        },
        {
            type: "confirm",
            name: "tests",
            message: "Is there a test included?",
            default: false
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser().then(response =>{
        const readMeData = generateMarkdown(response)

        writeToFile('./README.md', readMeData)
    })
}

// Function call to initialize app
init();
