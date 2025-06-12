function checkAlphabeticalOrder(inputString){
    inputString = inputString.replace(/ /g,'')
    inputString = inputString.toLowerCase()
    for(let i=0; i<inputString.length - 1; i++){
        if(inputString[i] > inputString[i+1]){
            return false
        }
    }
    return true
}
console.log(checkAlphabeticalOrder('acehkosvz'))
console.log(checkAlphabeticalOrder('abcab'))
console.log(checkAlphabeticalOrder('abc de'))
console.log(checkAlphabeticalOrder('abc he'))
console.log(checkAlphabeticalOrder('Abcde'))