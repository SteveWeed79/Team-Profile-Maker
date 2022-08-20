const Engineer = require("../lib/engineer.js")


const eng = new Engineer('Steve', 42, 'email@email.com', 'Turkey');


describe("Engineer", () => {


    test("Check Engineer constructor", () => {
        expect(typeof eng).toBe("object");
        expect(typeof eng.getName()).toBe("string")
        expect(typeof eng.getId()).toBe("number")
        expect(typeof eng.getEmail()).toBe("string")
        expect(typeof eng.getGithub()).toBe("string")
    })
}

)