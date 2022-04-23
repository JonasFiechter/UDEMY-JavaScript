'use strict;'

const weekdays = ['monday','thuesday','wednsday','thursday','friday','saturday','sunday',]
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavantelli 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starter_menu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    main_menu: ['Pizza', 'Pasta', 'Lasagna', 'Risotto'],
};

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

    // ES6 enhanced object literals
    opening_hours,

    // ES6 new way to write a function
    order(starter_index, main_index) {
        return (this.starter_menu[starter_index], this.main_menu[main_index])
    },
    order_delivery(item) {
    }
};