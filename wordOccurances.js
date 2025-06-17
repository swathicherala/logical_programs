let big = 'This is a big string with the word big repeated in the big strig'
let word = 'big'
function wordOccurances(big, word){
    const result = []
    let index = big.indexOf(word)
    while(index !== -1){
        result.push(index)
        index = big.indexOf(word, index+1)
    }
    return result
}
console.log(wordOccurances(big, word))