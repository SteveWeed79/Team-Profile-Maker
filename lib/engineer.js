const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(gitHub, role) {
        super(employeeName, id, email, role)
        this.gitHub = gitHub
        this.role = "Engineer"
    };
    getGithub() {
        return this.gitHub;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Engineer;