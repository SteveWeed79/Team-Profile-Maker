const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Html = require('./src/generateHTML')

const team = []


function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Please select the employee role',
                choices: ['Manager', 'Engineer', 'Intern']
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
                name: 'officeNum',
                message: 'Please enter the name the Managers office number',
                when: (answers) => answers.role === 'Manager'
            },
            {
                type: 'input',
                name: 'git',
                message: 'Please enter your gitHub username',
                when: (answers) => answers.role === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the name of the school you attend',
                when: (answers) => answers.role === 'Intern'
            },

        ])

        .then((data) => {
            const employeeName = data.employeeName;
            const id = data.id;
            const email = data.email;
            

            switch (data.role) {
          
                case 'Manager':
                    const man = new Manager(employeeName, id, email, data.officeNum)
                    team.push(man)
                    console.log(team)
                    anontherEmp()
                    break
                case 'Engineer':
                    const eng = new Engineer(employeeName, id, email, data.git)
                    team.push(eng)
                    console.log(team)
                    anontherEmp()
                    break
                case 'Intern':
                    const intern = new Intern(employeeName, id, email, data.school)
                    team.push(intern)
                    console.log(team)
                    anontherEmp()
                    break
            }
        }



        )
};

function anontherEmp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'more',
                message: 'Do you want to add another employee?',
                choices: ['Yes', 'No']
            },
        ])
        .then((data) => {
            console.log(data)
            if(data.more === 'Yes') {
                buildTeam()
            } else {
                const textHtml = Html(team)
                fs.writeFile("dist/index.html", textHtml, error => {
                    if (error) throw error
                    else {
                        console.log("Team Profile File Created!")
                    }
                })
            }

        });
        
}

buildTeam()
