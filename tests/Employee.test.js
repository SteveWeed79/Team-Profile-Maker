const Employee = require("../lib/employee.js")


const emp = new Employee('Steve', 42, 'email@email.com', 'Turkey');


describe("Employee", () => {


    test("Check Employee constructor", () => {
        expect(typeof emp).toBe("object");
        expect(typeof emp.getName()).toBe("string")
        expect(typeof emp.getId()).toBe("number")
        expect(typeof emp.getEmail()).toBe("string")

    })
}

)

