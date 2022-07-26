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
    }
    return capitalizeNameSplited.join(' ')
}

console.log(capitalizeName('maria markell santos'))