function vowelsConsonenetCount(inputString){
    let vowels = 'aeiou'
    inputString = inputString.toLowerCase()
    inputString = inputString.replace(/ /g,'')
    let vowelsCount = 0
    let consonantCount = 0
    for(let i=0; i<inputString.length; i++){
        if(vowels.includes(inputString[i])){
            vowelsCount++
        }else if (/[a-z]/.test(inputString[i])){
            consonantCount++
        }
    }
    return {vowelsCount, consonantCount}
}
console.log('Vowel & Consonant Count:', vowelsConsonenetCount('Venu Challa'))
console.log('Vowel & Consonant Count:', vowelsConsonenetCount('Swathi Venu Challa'))
console.log('Vowel & Consonant Count:', vowelsConsonenetCount('Swathi 123'))
console.log('Vowel & Consonant Count:', vowelsConsonenetCount('Swathi 123 22'))