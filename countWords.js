function countWords(input){
    input = input.trim()
    let splittedword = input.split(' ')
    const nonEmptySplittedWord = splittedword.filter((element)=>element != '')//to remove empty strings if there is more then one space in the sentence
    let result = nonEmptySplittedWord.length
    return result
}
console.log('Count of words in the sentence', countWords(" This is a sentence "))
console.log('Count of words in the sentence', countWords("I Love You Venu Challa"))
console.log('Count of words in the sentence', countWords("This   is a sentence"))