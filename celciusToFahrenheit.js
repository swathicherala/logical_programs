function celciusToFahrenhite(celcius){
    let fahrenhite = (celcius * (9 / 5)) + 32
    fahrenhite = Math.round(fahrenhite)
    return fahrenhite
}
console.log('Celcius to fahrenhite is:', celciusToFahrenhite(34))
console.log('Celcius to fahrenhite is:', celciusToFahrenhite(27))
