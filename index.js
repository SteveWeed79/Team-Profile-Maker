const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const team = []


function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Please select the employee role',
                choices: ['Employee', 'Manager', 'Engineer', 'Inter']
            },
            {
                type: 'input',
                name: 'employeeName',
                message: 'Please enter the employee name',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the employee id number',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the employee email',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your gitHub username',
                when: (answers) => answers.role === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the name of the school you attend',
                when: (answers) => answers.role === 'Intern'
            },
            {
                type: 'list',
                name: 'more',
                message: 'Do you want to add another employee?',
                choices: ['Yes', 'No']
            },


        ])

        .then((data) => {
            this.employeeName = data.employeeName;
            this.id = data.id;
            const email = data.email;
            const role = data.role;

            switch (data.role) {
                case 'Employee':
                    const emp = new Employee(employeeName, id, email, role)
                    team.push(emp)
                    console.log(team)


                case 'Manager':
                    const man = new Manager(employeeName, id, email, role)
                    team.push(man)
                    console.log(team)

                case 'Engineer':
                    this.gitHub = data.git;
                    const eng = new Engineer(employeeName, id, email, role, gitHub)
                    team.push(eng)
                    console.log(team)

                case 'Intern':
                    this.school = data.school;
                    const intern = new Intern(employeeName, id, email, role, school)
                    team.push(intern)

                    console.log(team)
            }
        }


            // fs.writeFile('.dist/index.html', buildTeam, (error, data) =>
            //     error ? console.error(error) : console.log("Your Team Profile index.html Creation Was Successful!")
        )
};

function anontherEMp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'more',
                message: 'Do you want to add another employee?',
                choices: ['Yes', 'No']
            },
        ])
}

buildTeam()
