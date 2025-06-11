function calculateLeapYear(number){
    if(number % 4 === 0){
       return true
    } else{
        return false
    }
}
console.log(calculateLeapYear(2028))