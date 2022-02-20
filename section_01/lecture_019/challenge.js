/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */

let john_weight = 78;
let john_height = 1.69;
let mark_weight = 95;
let mark_height = 1.88;

const john_bmi = john_weight / john_height ** 2;
const mark_bmi = mark_weight / mark_height ** 2;

if (john_bmi > mark_bmi) {
    console.log(`John's BMI is higher than Mark's, ${john_bmi - mark_bmi} points`)
} else {
    console.log(`Mark's BMI is higher than John's, ${mark_bmi - john_bmi} points`)
}