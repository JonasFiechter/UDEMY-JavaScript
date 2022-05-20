'use strict'

const flight = 'LH234'
const jonas = {
    name: 'Jonas Fiechter',
    passport: 1238383838
};


function checkIn(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 1238383838){
        alert('Check in')
    } else {
        alert('Wrong passport')
    }
}

// checkIn(flight, jonas);
// console.log(flight, jonas)

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

function newPassport(person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas);
checkIn(flight, jonas);