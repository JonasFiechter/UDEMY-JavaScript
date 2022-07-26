'use strict'

// Split method
const myName = 'Jonas Schmedtman'
console.log(myName.split(' '))

const [firstName, lastName] = myName.split(' ')
console.log(firstName, lastName)

// Join method
const formalName = ['Mr', firstName, lastName].join(' ')
console.log(formalName)


// function using slice, split and join to capitaliza any name
const capitalizeName = function(name) {
    const splitedName = name.split(' ')
    const capitalizeNameSplited = []
    for (const n of splitedName) {
        capitalizeNameSplited.push(n[0].toUpperCase() + n.slice(1))
        // alternative way of doing it
        // capitalizeNameSplited.push(n[0].replace, n[0].toUpperCase())
    }
    return capitalizeNameSplited.join(' ')
}

console.log(capitalizeName('maria markell santos'))


// Padding
const message = 'Go for launch!'
console.log(message.padStart(25, '%'))

// CreditCard masking
const maskNumber = function(number) {
    const str = number + '' //transform any input to string
    const masked = ''.padStart((str.length - 4), '*') + str.slice(-4)
    console.log(masked)
}

maskNumber(120391209312)

// Repeat
const message2 = 'Bad weather, ALL DEPARTURE DELAYED';
console.log(message2.repeat(23))