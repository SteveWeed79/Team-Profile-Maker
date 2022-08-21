const Employee = require("../lib/employee.js")


const emp = new Employee('Steve', 42, 'email@email.com', 'Turkey');


describe("Employee", () => {


    test("Check Employee constructor", () => {
        expect(typeof emp).toBe("object");
        expect(emp.getName()).toBe("Steve")
        expect(emp.getId()).toBe(42)
        expect (emp.getEmail()).toBe("email@email.com")
        
    })
}

)

