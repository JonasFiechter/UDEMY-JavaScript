/* 
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calc_tip' function we wrote before (no need to repeat) to calculate tips and
total values (bill + tip) for every bill value in the bills array. Use a for loop to perform 10 calcs

test DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

function calc_tip (bill) {
    if (bill < 50) {
        return 0
    } if (bill >= 50 & bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calc_tip(bills[i]))
    totals.push(calc_tip(bills[i]) + bills[i])
}

console.log(bills, tips, totals)