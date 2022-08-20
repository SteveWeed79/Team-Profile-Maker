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
                name: 'role',
                message: 'Please select the employee role',
                choices: ['Employee', 'Manager', 'Engineer', 'Inter']
            },


        ])

        .then((data) => {

            switch (data.role) {
                case 'Employee':
                    const emp = new Employee(data.employeeName, data.id, data.email, data.role)
                    team.push(emp)
                    console.log(emp)
                    console.log(Employee)
                    console.log(team)

                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'more',
                                message: 'Would you like to enter another employee?',
                                choices: ['Yes', 'No']
                            }
                        ])
                        .then((data) => {
                            if (data.more == 'Yes') {
                                buildTeam()
                            } else {

                            }

                        })
                case 'Manager':
                    const man = new Manager(data.employeeName, data.id, data.email, data.role)
                    team.push(man)
                    console.log(man)
                    console.log(Manager)
                    console.log(team)

                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'more',
                                message: 'Would you like to enter another employee?',
                                choices: ['Yes', 'No']
                            }
                        ])
                        .then((data) => {
                            if (data.more == 'Yes') {
                                buildTeam()
                            } else {

                            }

                        })

            }
        }






            // fs.writeFile('.dist/index.html', buildTeam, (error, data) =>
            //     error ? console.error(error) : console.log("Your Team Profile index.html Creation Was Successful!")
        )
};

buildTeam()
