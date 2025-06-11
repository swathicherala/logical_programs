function sumOfDigits(number){
    const result = number.toString().split('')
    let final = 0
    for(let i=0; i<result.length; i++){
        let num = parseInt(result[i])
         final = final + num 
    }
    return final
}
console.log('Final Result is : ', sumOfDigits(24))
console.log('Final Result is : ', sumOfDigits(2985))
console.log('Final Result is : ', sumOfDigits(20))
console.log('Final Result is : ', sumOfDigits(901))