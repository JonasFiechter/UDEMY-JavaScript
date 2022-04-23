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

// if without optional chaining
if (restaurant.opening_hours.monday.open && restaurant.opening_hours.friday.open)
    console.log(restaurant.opening_hours.monday.open);

// with optional chaining  
console.log(restaurant.opening_hours.wednsday?.open);
// with optional chaining
console.log(restaurant.opening_hours.monday?.open);

// example
const weekdays = ['monday','thuesday','wednsday','thursday',
'friday','saturday','sunday',]

for (const day of weekdays) {
    const open = restaurant.opening_hours[day]?.open
    console.log(`On ${day} we open at ${open}`)
}