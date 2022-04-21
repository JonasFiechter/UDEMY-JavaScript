/* 
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

'use strict'

const players_1 = [5, 2, 4, 5]
const players_2 = [2, 3, 4, 5]
const [gk_team_1] = players_1
const [gk_team_2] = players_2
const [, ...fieldPlayers_team_1] = players_1
const [, ...fieldPlayers_team_2] = players_2
const allPlayers = [...players_1, ...players_2]
const players_1_final = [...players_1, 'Thiago', 'Coutinho', 'Perisic']

const game = {
    team_1: 'Bayern Munich',
    team_2: 'Borrussia Dortmund',
    players: []
}