const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, actor, duration, genders = 0) {
        this.id = uuid4();
        this.title = title;
        this.actor = actor;
        this.duration = duration;
        this.genders = genders;
    }

    gender() {
        this.genders += 1;
    }
}

module.exports = Movie;
