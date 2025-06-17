function letterOccurances(inputString){
    let result = {}
    for(let char of inputString){
        if (result[char]){
            result[char]++
        } else{
            result[char] = 1
        }
    }
    return result
}
console.log(wordOccurances('aabacabbbbd'))