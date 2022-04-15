'use strict;'

/* 
The spread operator '...' is very usefull in unpacking objects, arrays and 
others iterables.
*/

const arr = [7, 8, 9];
const bad_new_arr = [1, 2, 7, 8, 9];
const good_new_array = [1, 2, ...arr];

console.log(bad_new_arr, good_new_array)

const [a, b, others] = [1, 2, 3, 4, 5]

console.log(a, b, others)