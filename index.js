const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select the employee role',
        },
        {
            type: 'input',
            name: 'unknown2',
            message: 'Use this as a template',
        }
    ])

    .then((data) => { })





fs.writeFile('.dist/index.html', buildTeam, (error, data) =>
    error ? console.error(error) : console.log("Your Team Profile index.html Creation Was Successful!")
);
