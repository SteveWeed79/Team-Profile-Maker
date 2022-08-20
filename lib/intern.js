const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(employeeName, id, email, role, school) {
        super(employeeName, id, email, role)
        this.school = school
        this.role = "Intern"
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Intern;