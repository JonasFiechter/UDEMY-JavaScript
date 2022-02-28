const year = 2037;

// function declaration
function calc_age(birth_year) {
    return year - birth_year;
}

console.log(calc_age(1991));

// function expression
const calc_age_2 = function (birth_year) {
    return 2037 - birth_year;
}

console.log(calc_age_2(1993));