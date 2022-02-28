// Arrow function
 const calc_age_3 = birth_year => 2037 - birth_year;

 console.log(calc_age_3(1993));


 const years_until_retirement = birth_year => {
     const age = 2037 - birth_year;
     const retirement = 65 - age;
     return retirement;
 }

 console.log(years_until_retirement(1992));