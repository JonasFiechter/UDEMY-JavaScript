'use strict'

function greet(greeting) {
    return function(name) {
        console.log(`Greeting: ${greeting}, name: ${name}`)
    };
};

const greeter = greet('Hey');
greeter()

// Challenge write greet func with arrow function

const greetArrow = greeting => name => console.log(`${greeting}, ${name}`)

greetArrow('Hello')('Jonas')