//bring in intern
const Intern = require("../lib/Intern");

//TESTS FOR SETTERS//
test("Can set school via constructor arguments", () => {
    //variable for school
    const testValue = "St. Mary's"
    //variable for new Intern (passing in the variable for the school here)
    const e = new Intern("Wendy", 4, "test@yahoo.com", "St. Mary's");
    //set up your expect and to be
    expect(e.school).toBe(testValue);
});

//TEST FOR GETTERS//

test("Can get school name via getSchool()", () => {
//variable for test value
const testValue = "St. Mary's";
// variable for new Intern(testValue)
const e = new Intern("Tom", 456, "test@email.com", testValue);
//expect using the getter, and then your to be
expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
     //testValue
     const testValue = "Intern";
    //new Intern("example", testValue)
    const e = new Intern ("Wendy", 4, "test@yahoo.com", "St. Mary's");
    //expect and to be
    expect(e.getRole()).toBe(testValue);
});