function multiplicationOfNumbers(num1, num2){
    let mult = 0
    let result = []
    for(let i=1; i<=num2; i++){
        mult = mult + num1
        console.log(`${num1} * ${i} = ${mult}`)
    }
    
}
multiplicationOfNumbers(2,10)