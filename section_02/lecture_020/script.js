/* 
Type coercion and equality operators

differnce bettween === and ==

strict comparison doesn't converts the value
*/

const age = 18
if (age === 18) console.log('You are an adult! (strict)')
if (age == 18) console.log('You are an adult! (loose)')

if (age === '18') console.log('You are an adult! (strict)')
if (age == '18') console.log('You are an adult! (loose)')

const favorite = prompt("what's your favorite number? ");