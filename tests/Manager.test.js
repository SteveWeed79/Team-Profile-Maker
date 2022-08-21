const Manager = require("../lib/manager.js")


const man = new Manager('Orion', 2, 'lilboy@email.com');


describe("Manager", () => {


    test("Check Manager constructor", () => {
        expect(typeof man).toBe("object");
        expect(man.getName()).toBe("Orion")
        expect(man.getId()).toBe(2)
        expect(man.getEmail()).toBe("lilboy@email.com")
    })
}

)