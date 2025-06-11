function factor(input){
    let result = []
    for(let i=1; i<=input; i++){
        if(input%i === 0){
            result.push(i)
        }
    }
return result
}
console.log(factor(5))
console.log(factor(8))