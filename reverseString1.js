function revereString(inputString){
    let splittedString = inputString.split('')
    let result = []
    for(let i=splittedString.length; i>=0; i--){
        result.push(splittedString[i])
    }
    return result.join('')
}
console.log(revereString('Hello World'))