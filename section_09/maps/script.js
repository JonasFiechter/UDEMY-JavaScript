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
    .set(false, 'We are closed :C')

console.log(rest.get('name'))
console.log(rest.get(true))