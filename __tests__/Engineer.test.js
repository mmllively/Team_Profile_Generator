//bring in engineer
const Engineer = require("../lib/Engineer");

//TEST FOR GETTERS//
test("Can set github via constructor arguments", () => {
    //variable for github
    const testValue  = "plandry"
    //variable for new Engineer (passing in the variable for the github here)
    const e = new Engineer("Peter", 5, "test@yahoo.com", "plandry");
    //set up your expect and to be
    expect(e.getGithub()).toBe("plandry");
});

test("getRole() should return \"Engineer\"", () => {
     //testValue
     const testValue = "Engineer";
    //new Engineer("example", testValue)
    const e = new Engineer ("Peter", 5, "test@yahoo.com", "plandry");
    //expect and to be
    expect(e.getRole()).toBe(testValue);
});
