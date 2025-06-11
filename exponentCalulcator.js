function exponentCalc(input1, input2){
    let result = 1
    for(let i=1; i<=input2; i++){
        result = result * input1
    }
    return result
}
console.log(`Exponent is:`, exponentCalc(2,3))
console.log(`Exponent is:`, exponentCalc(5,4))