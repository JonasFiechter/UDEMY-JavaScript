'use strict;'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starter_menu: ['Foccacia', 'Bruschetta', 'Garlic bread', 'Salada capresi'],
    main_menu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (first_item, second_item) {
        return [this.starter_menu[first_item], this.main_menu[second_item]]
    }
}

const [a, b] = restaurant.order(1, 2)
console.log(a, b)