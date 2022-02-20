/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolphins_result_1 = 102
let dolphins_result_2 = 108
let dolphins_result_3 = 94

let koalas_result_1 = 102
let koalas_result_2 = 108
let koalas_result_3 = 94

const dolphins_average = (dolphins_result_1 + dolphins_result_2 + dolphins_result_3) / 3
const koalas_average = (koalas_result_1 + koalas_result_2 + koalas_result_3) / 3

console.log(dolphins_average, koalas_average)

if (dolphins_average >= 100 || koalas_average >= 100) {
    if (dolphins_average === koalas_average) {
        console.log('DRAW!')
    } else if (dolphins_average > koalas_average) {
            console.log('DOLPHINS WIN!')
    } else {
            console.log('KOALAS WIN')
    }
} else {
    console.log("none of the teams reached minimun of 100 points")
}