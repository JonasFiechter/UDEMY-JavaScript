const measure_kelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('degrees celsius:'))
    }
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measure_kelvin())