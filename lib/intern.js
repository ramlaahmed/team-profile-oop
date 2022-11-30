class Intern  {
    constructor (name, id, email, school) {
    this.school = school; 
    this.name = name;
    this.id = id;
    this.email = email;
    }

getSchool () {
        return this.school;
    }

getRole () {
        return "Intern";
    }
}

module.exports = Intern; 