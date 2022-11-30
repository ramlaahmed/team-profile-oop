class Engineer {
    constructor (name, id, email, github) {
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 