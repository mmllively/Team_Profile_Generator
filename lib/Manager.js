// In addition to Employee's properties and methods, Engineer will also have:
const Employee = require('./Employee');

class Manager extends Employee {
//officeNumber
constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
}
 
getOfficenumber(){
    return this.officeNumber;
}

//getRole() // Overridden to return 'Manager'

getRole() {
    return "Manager";
}
}

module.exports = Manager;