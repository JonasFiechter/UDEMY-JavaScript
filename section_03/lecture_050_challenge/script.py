'''
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calc_tip' function we wrote before (no need to repeat) to calculate tips and
total values (bill + tip) for every bill value in the bills array. Use a for loop to perform 10 calcs

test DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
'''

def calc_tip(bill):
    if bill < 50: return 0
    elif bill >= 50 and bill <= 300: return bill ** .15
    else: return bill ** .20

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips = [calc_tip(i) for i in bills]
totals = [i + calc_tip(i) for i in bills]

print(f'{bills} \n{tips} \n{totals}')