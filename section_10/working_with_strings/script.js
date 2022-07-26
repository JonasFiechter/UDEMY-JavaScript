'use strict'

const myName = 'Jonas Schmedtman'
console.log(myName.split(' '))

const [firstName, lastName] = myName.split(' ')
console.log(firstName, lastName)

const formalName = ['Mr', firstName, lastName].join(' ')
console.log(formalName)