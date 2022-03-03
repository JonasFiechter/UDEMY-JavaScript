const jonas_array = [
    'Jonas',
    'Fiechter',
    2037 - 1993,
    ['Michael', 'Peter', 'Steven'],
];

const types = []

for (let i = jonas_array.length -1; i >= 0; i--) {
    console.log(jonas_array[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`)
    for (let i = 1; i < 13; i++) {
        console.log(`** example ${i} **`)
    }
}
