'use strict'

const airline = 'AIR CANADA';
const plane  = 'A320'

// returns the property value even if not linked into a variable
console.log(airline.length);
console.log('AIR CANADA'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// finding an index functions are case sensitive
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
//                     begin , end -> end - beginning
console.log(airline.slice(0, 3));

console.log(airline.slice(0, airline.indexOf(' ')));

// negative numbers can be used to run the function backwards
console.log(airline.slice(-2));
console.log(airline.slice(0, -1));

const checkMiddSeat = function(seat) {
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') {console.log('you got the middle seat')}
    else {console.log('You got lucky')}
};

checkMiddSeat('11B');
checkMiddSeat('23C');
checkMiddSeat('3E');