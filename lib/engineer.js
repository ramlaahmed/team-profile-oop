class Engineer {
    constructor (name, id, email, github) {
        this.github = github; 
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 