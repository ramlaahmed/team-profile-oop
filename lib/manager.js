class Manager {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber; 
        this.name = name;
        this.id = id;
        this.email = email;
    }

getRole () {
        return "Manager";
    }
}

module.exports = Manager; 