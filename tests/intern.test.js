const Intern = require("../lib/intern.js")


const int = new Intern('Orion', 2, 'lilboy@email.com', 'DayCare');


describe("Intern", () => {


    test("Check Engineer constructor", () => {
        expect(typeof int).toBe("object");
        expect(int.getName()).toBe("Orion")
        expect(int.getId()).toBe(2)
        expect(int.getEmail()).toBe("lilboy@email.com")
        expect(int.getSchool()).toBe("DayCare")
    })
}

)