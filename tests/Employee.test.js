const Employee = require("../lib/employee.js")


const emp = new Employee('Orion', 2, 'lilboy@email.com', 'TheBoss');


describe("Employee", () => {


    test("Check Employee constructor", () => {
        expect(typeof emp).toBe("object");
        expect(emp.getName()).toBe("Orion")
        expect(emp.getId()).toBe(2)
        expect(emp.getEmail()).toBe("lilboy@email.com")

    })
}

)

