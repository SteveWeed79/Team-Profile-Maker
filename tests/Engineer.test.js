const Engineer = require("../lib/engineer.js")


const eng = new Engineer('Orion', 2, 'lilboy@email.com', 'Turkey');


describe("Engineer", () => {


    test("Check Engineer constructor", () => {
        expect(typeof eng).toBe("object");
        expect(eng.getName()).toBe("Orion")
        expect(eng.getId()).toBe(2)
        expect(eng.getEmail()).toBe("lilboy@email.com")
        expect(eng.getGithub()).toBe("Turkey")
    })
}

)