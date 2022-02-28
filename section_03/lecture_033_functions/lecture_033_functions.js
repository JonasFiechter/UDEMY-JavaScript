function logger() {
    console.log('Testing funcion')
}


// calling, invoking, running function
logger();

function fruit_processor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
// print right way the result of function
console.log(fruit_processor(4, 2));

// place the result into an variable
const my_juice = fruit_processor(4, 5);
console.log(my_juice);