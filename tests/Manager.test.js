const Manager = require("../lib/manager.js")


const man = new Manager('Steve', 42, 'email@email.com', 'Turkey');


describe("Manager", () => {


    test("Check Manager constructor", () => {
        expect(typeof man).toBe("object");
        expect(typeof man.getName()).toBe("string")
        expect(typeof man.getId()).toBe("number")
        expect(typeof man.getEmail()).toBe("string")

    })
}

)