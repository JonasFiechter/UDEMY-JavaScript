'use strict'

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: () {} <-- Old version
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline}
        flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
};
lufthansa.book(239, 'Jonas Fiechter');
lufthansa.book(531, 'Mike Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book

// Does NOT work
// book(132, 'Sarah Williams');

// Call method
// Call the function with the first argument as the 'this.' keyword
book.call(eurowings, 243, 'Sarah Williams')

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 594, 'Mary Cooper')

// Apply Method
const flightData = [572, 'George Cooper'];
const flightData2 = [612, 'Sarah Cooper'];
book.apply(lufthansa, flightData);

book.call(lufthansa, ...flightData2);

// Bind Method
const bookEW = book.bind(eurowings);

bookEW(32, 'Stephen Hawking');

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);