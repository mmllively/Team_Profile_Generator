//bring in employee
const Employee = require("../lib/Employee");

describe("Employee", () => {
test("Can Instantiate Employee instance", () =>{
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

//TESTS FOR SETTERS//
test("Can set name via constructor arguments", () => {
    //variable for name
    const name = "Peter"
    //variable for new Employee(passing in the variable for the name here)
    const e = new Employee(name);
    //set up your expect and to be
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    //variable for the test value, in this case a number since it's an id
    const testValue = 100;
    //variable for new Employee("example name as a string", testValue)
    const e = new Employee ("Laura", testValue);
    //set up your expect and to be
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor arguent", () => {
    //variable for the test value
    const testValue = "test@yahoo.com"
    //variable for new Employee("example name", example number, test value)
    const e = new Employee ("Emily", 345, testValue);
    //set up your expect and to be
    expect(e.email).toBe(testValue);
});
});

//TEST FOR GETTERS//
describe("getName", () => {
test("Can get name via getName()", () => {
//variable for test value
const testValue = "Peter";
// variable for new Employee(testValue)
const e = new Employee(testValue);
//expect using the getter, and then your to be
expect(e.getName()).toBe(testValue);
});
});

describe("getId", () => {
test("Can get id via getId()", () => {
    //testValue
    const testValue = 100;
    //new Employee("example name", testValue)
    const e = new Employee ("Paul", testValue);
    //expect and to be
    expect(e.getId()).toBe(testValue);
});
});


describe("getEmail", () => {
test("Can get email via getEmail()", () => {
    //testValue
    const testValue = "test@yahoo.com"
    //new Employee("example email", testValue)
    const e = new Employee ("Adam", 3, testValue);
    //expect and to be
    expect(e.getEmail()).toBe(testValue);
});
});

describe("getRole", () => {
test("getRole() should return \"Employee\"", () => {
     //testValue
     const testValue = "Employee"
    //new Employee("example", testValue)
    const e = new Employee ("Employee");
    //expect and to be
    expect(e.getRole()).toBe(testValue);
});
});