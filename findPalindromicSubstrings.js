function isPalindrome(inputString){
    for(let i=0; i<=inputString.length-1; i++){
        if(inputString[i] !== inputString[inputString.length-1-i]){
            return false
        }
    }
    return true
}
// console.log(isPalindrome('madam'))
// console.log(isPalindrome('swathi'))

function findPalindrome(inputString){
    const result = []
    for(let i=0; i<inputString.length; i++){
        for(let j=i+1; j<=inputString.length; j++){
            const substr = inputString.slice(i,j)
            if(isPalindrome(substr) && substr.length >1){
                result.push(substr)
            }
        }
    }
    return result
}
console.log(findPalindrome('radar'))
console.log(findPalindrome('swathi'))
console.log(findPalindrome('madam'))