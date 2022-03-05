const measure_kelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('degrees celsius:')
    }
    const kelvin = number(measurement.value) + 273;
    return kelvin;
}

console.log(measure_kelvin())