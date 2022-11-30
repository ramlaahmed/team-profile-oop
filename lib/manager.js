class Manager {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber; 
    }

getRole () {
        return "Manager";
    }
}

module.exports = Manager; 