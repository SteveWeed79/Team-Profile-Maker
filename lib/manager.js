const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(employeeName, id, email, role) {
        super(employeeName, id, email);
        this.role = "Manager";
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;