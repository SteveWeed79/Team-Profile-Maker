const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(employeeName, id, email, officeNum) {
        super(employeeName, id, email);
        this.officeNum = officeNum;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;