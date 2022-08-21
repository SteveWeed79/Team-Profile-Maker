const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(employeeName, id, email, gitHub) {
        super(employeeName, id, email);
        this.gitHub = gitHub;
     


    };


    getGithub() {
        return this.gitHub;
    };

    getRole() {
        return "Engineer"
    };
}

module.exports = Engineer;