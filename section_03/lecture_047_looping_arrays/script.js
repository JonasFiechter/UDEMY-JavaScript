const jonas_array = [
    'Jonas',
    'Fiechter',
    2037 - 1993,
    ['Michael', 'Peter', 'Steven'],
    true,
    'something else'
];

const types = []

for(let i = 0; i < jonas_array.length; i++) {
    console.log(jonas_array[i], typeof(jonas_array[i]));

    //Filling types array
    // types[i] = typeof jonas_array[i];

    //other way to fill types array
    types.push(typeof(jonas_array[i]))
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}

console.log(ages);

// continue and break
console.log('---CONTINUE---')
for (let i = 0; i < jonas_array.length; i++) {
    if (typeof jonas_array[i] !== 'string') continue;

    console.log(jonas_array[i], typeof(jonas_array[i]))
}

console.log('---BREAK---')
for (let i = 0; i < jonas_array.length; i++) {
    if (typeof jonas_array[i] === 'number') break;

    console.log(jonas_array[i], typeof(jonas_array[i]))
}