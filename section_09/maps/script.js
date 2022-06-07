'use strict;'

const opening_hours = {
    thuesday: {
        open: 12,
        close: 22,
    },
    friday: {
        open: 12,
        close: 22,
    },
    saturday: {
        open: 0,
        close: 24,
    },
    monday: {
        open: 0,
        close: 24,
    },

};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavantelli 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starter_menu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    main_menu: ['Pizza', 'Pasta', 'Lasagna', 'Risotto'],

    // ES6 enhanced object literals
    opening_hours,

    // ES6 new way to write a function
    order(starter_index, main_index) {
        return (this.starter_menu[starter_index], this.main_menu[main_index])
    },
    order_delivery(item) {
    }
};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('closed', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :C');

console.log(rest.get('name'))
console.log(rest.get(true))

const question = new Map([
    ['question', 'what is the best programming language?'],
    [1, 'c'],
    [2, 'java'],
    [3, 'javaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again'],
]);

console.log(question)
console.log(opening_hours)
console.log(Object.entries(opening_hours))

// convert object to a map
const hours_map = new Map(Object.entries(opening_hours))
console.log(hours_map)

for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};

const answer = 2

// my solution
if (answer === question.get('correct')) {
    console.log(question.get(true))
} else {console.log(question.get(false))}

// teacher's solution
console.log(question.get(answer === question.get('correct')))

//convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());