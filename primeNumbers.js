function primeNumbers(num){
    for(let i=2; i<=num; i++){
        if(num%i === 0){
            return false
        }else{
            return true
        }
    }
}
console.log(primeNumbers(5))
console.log(primeNumbers(12))
console.log(primeNumbers(97))
console.log(primeNumbers(2))
console.log(primeNumbers(7))