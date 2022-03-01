jonas = {
    firstname: 'Jonas', 
    lastname: 'Fiechter',
    birth_year: 1993,
    job: 'developer',

    // calc_age: function (birth_year) {
    //     return 2037 - birth_year

    calc_age: function () {
        this.age = 2037 - this.birth_year;
        return this.age;
    },

    get_summary: function () {
        return `${this.firstname} is a ${this.calc_age()} years old ${this.job}.`;
    },
    test: 'test'
}

console.log(typeof(jonas))
console.log(jonas.firstname)
console.log(jonas.get_summary())