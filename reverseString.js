function reverseString(inputString){
    if(typeof inputString !== 'string') throw new Error('Only string is allowed')
    let result = ""
    for(let i = inputString.length-1; i>=0 ; i--){
        result = result + inputString[i]
    }
    return result
}
console.log(reverseString('Hello'))
console.log(reverseString('Software Developer'))
// console.log(reverseString(3333))

// with array
function reverseStringUsingArray(inputString){
    const result = inputString.split('').reverse().join('')
    return result
}

console.log(reverseStringUsingArray('Hello'))
console.log(reverseStringUsingArray('Software Developer'))