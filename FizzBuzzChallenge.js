function FizzBuzzChallenge(number){
    let result = []
    for(let i=1; i<=number; i++){
        if((i%3 === 0) && (i%5 === 0)){
            input = 'FizzBuzz'
            result.push(input)
        }else if(i%3 === 0){
            input = 'Fizz'
            result.push(input)
        }else if(i%5 === 0){
            input = 'Buzz'
            result.push(input)
        }else{
            result.push(i)
        }
    }
    return result
}
console.log('Fizz Buzz Challenge', FizzBuzzChallenge(15))
console.log('Fizz Buzz Challenge', FizzBuzzChallenge(36))