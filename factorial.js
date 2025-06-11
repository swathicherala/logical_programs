function factorial(number){
    let fact = 1
    for(let i=1; i<=number; i++){
       let result = i * fact
        fact = result
    }
    return fact
}
console.log(`Factorial is`, factorial(5))
console.log(`Factorial is`, factorial(0))
console.log(`Factorial is`, factorial(1))