// function palindrome(value){
        //value = value.toLowerCase()
//        let palin = value.split('')
//        let reversestring = palin.reverse()
//        let reversedString = reversestring.join('')
//        if(value === reversedString){
//         return true
//        }else{
//         return false
//        }
// }
// console.log('Plaindrome is:',palindrome('madam'))
// console.log('Plaindrome is:',palindrome('swathi'))

function palindrome(value){
    value = value.toLowerCase()
    for(let i = 0; i <= value.length-1;i++){
        console.log(value[i], value[value.length-1-i])
        if(value[i] !== value[value.length-1-i]){
            return false
        }
    }
    return true
}
console.log('Plaindrome is:',palindrome('madam'))
console.log('Plaindrome is:',palindrome('swathi'))