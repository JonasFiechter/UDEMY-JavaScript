'use strict'

const bookings = [];

//                                          defined 1     defined 199
const createBooking = function(flightNum, passengersNum=1, price=199) {
    const booking = {
        flightNum,
        passengersNum,
        price
    }
    bookings.push(booking)
};

createBooking('LH123', 44, 994)
createBooking('DD232', undefined, 333)
createBooking('XT123', 94, 424)

console.log(bookings)
