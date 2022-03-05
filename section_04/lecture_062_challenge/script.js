/* 
Challenge from before, extract the minimun and the maximun value from the
array. and return the diference between then.
*/

const data = [12, 4, 2, -2, 22, 1, 23, 10, -3, -12, 5]

function extract_min_and_max(data) {

    let max = data[0]
    let min = data[0]

    for(let i = 0; i < data.length; i++) {
        if (data[i] > max) { max = data[i] }
        if (data[i] < min) { min = data[i] }
    }
    return({min: min, max: min})
}

console.log(data, extract_min_and_max(data))

/* 
Challenge
Print every itens from an array with a string into the console.
example: [17, 21, 23] will print "... 17ºC in 1 day ... 21ºC in 2 days 
... 23ºC in 3 days ... "
test DATA 1: [17, 21, 23]
test DATA 2: [12, 5, -5, 0, 4]
*/

const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];

function print_forecast(data) {

    let result = ''

    for (let i = 0; i < data.length; i++) {
        result += (`${data[i]}ºC in ${i + 1} days... `)
    }
    return result
}

console.log(print_forecast(data_2))