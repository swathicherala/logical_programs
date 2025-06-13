function perfectNumber(number){
    let result = 0
    for(let i=1; i<number; i++){
        if(number%i === 0){
            result = result + i
        }
    }
    if(result === number){
        return true
    }else{
        return false
    }
}
console.log(perfectNumber(6))
console.log(perfectNumber(28))
console.log(perfectNumber(30))