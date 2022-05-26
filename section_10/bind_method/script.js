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
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(32, 'Stephen Hawking');
bookLX(25, 'Martha cooper');

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);

// With Event listners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this)
    this.planes++
    console.log(this.planes)
};

// The "".this" keyword of the METHOD passed into the addEventListner('METHOD') will be set with
// the higher level function returned object like below, .this --> '.buy' button
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// To fix this we can use Bind method .bind to change the '.this' value
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// The first argument of bind method is '.this' but here we don't need it so place 'null' instead
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

// Challenge create a function that returns another one with the tax value and rate
// My solution
const addTax2 = function(rate) {
    return function(value) {
        console.log(value + value * rate)
    }
}

const taxRate = addTax2(0.1)
taxRate(400)

// Professor solution
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100));
console.log(addVAT2(23));