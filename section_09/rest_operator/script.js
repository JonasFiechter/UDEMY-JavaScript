'use strict;'

/* 
The spread operator '...' is very usefull in unpacking objects, arrays and 
others iterables.
*/

const [a, b, ...others] = [1, 2, 3, 4, 5]

console.log(a, b, others)