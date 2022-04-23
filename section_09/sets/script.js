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

const order_set = new Set ([
    'Pasta',
    'Pasta',
    'Pasta',
    'Pasta',
    'Pizza',
    'Risotto',
]);

console.log(order_set.size); // Returns the ammount of itens not repeating in the set
console.log(order_set.has('Pizza')); // Returns a boolean if the item exist or not

order_set.add('Garlic Bread')
order_set.delete('Pasta')