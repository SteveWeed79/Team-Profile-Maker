const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(employeeName, id, email, role, gitHub) {
        super(employeeName, id, email, role);
        this.gitHub = gitHub;
        this.role = "Engineer";


    };


    getGithub() {
        return this.gitHub;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Engineer;