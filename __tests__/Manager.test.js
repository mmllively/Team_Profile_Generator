//bring in manger
const Manager= require("../lib/Manager");

//TESTS FOR SETTERS//
test("Can set officeNumber via constructor arguments", () => {
    //variable for officeNumber
    const testValue  = "7034008688"
    //variable for new Mangager(passing in the variable for the officeNumber here)
    const e = new Manager("Reid", 7, "test@yahoo.com", testValue);
    //set up your expect and to be
    expect(e.officeNumber).toBe(testValue);
});

//TEST FOR GETTERS//

test("Can get office number name via getOfficenumber()", () => {
//variable for test value
const testValue = "7034008688";
// variable for new Manager(testValue)
const e = new Manager("Mary", 234, "test@email.com", testValue);
//expect using the getter, and then your to be
expect(e.getOfficenumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
     //testValue
     const testValue = "Manager";
    //new Manager("example", testValue)
    const e = new Manager ("Reid", 7, "test@yahoo.com", "7034008688");
    //expect and to be
    expect(e.getRole()).toBe(testValue);
});