
// In addition to Employee's properties and methods, Engineer will also have:
const Employee = require('./Employee');

class Intern extends Employee {
//school
constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
}
 
// getSchool()
getSchool() {
    return this.school;
}

// getRole() // Overridden to return 'Intern'

getRole() {
    return "Intern";
}
}

module.exports = Intern;