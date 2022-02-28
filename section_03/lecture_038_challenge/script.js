/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics 
discipline, wich works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one 
average score per team)
A team only wins if it has at least Double of the average score of the other team. Otherwise,
no team wins!

1. Create an arrow function 'calc_average' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams.
3. Create a function 'check_winner' that takes the average score of each team as parameters
('avg_dolphins', 'avg_koalas'), and then logs the winner to console, together with victory 
points, according to the rule above. Example: "Koalas win 30 vs 13".
4 Use the 'check_winner' function to determine the winner for both DATA 1 and DATA 2.
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calc_average = (score_1, score_2, score_3) => {
    return (score_1 + score_2 + score_3) / 3;
} 

const avg_dolphins = calc_average(34, 23, 27);
const avg_koalas = calc_average(65, 54, 85);

function check_winner(avg_dolphins, avg_koalas) {
    if (avg_dolphins >= avg_koalas * 2) {
        return `Dolphins wins with ${avg_dolphins} vs ${avg_koalas} average points`
    } if (avg_koalas >= avg_dolphins * 2) {
        return `Koalas wins with ${avg_koalas} vs ${avg_dolphins} average points`
    } else {
        return `Nobody wins`
    }
}

console.log(check_winner(avg_dolphins, avg_koalas))