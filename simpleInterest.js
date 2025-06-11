function simpleInterest(principalAmt, interest, year){
    let result = (principalAmt * interest * year)/100
    result = result.toFixed()
    return result
}
console.log('SimpleInterest', simpleInterest(1000,5,1))
console.log('SimpleInterest', simpleInterest(20000,5.5,1))
console.log('SimpleInterest', simpleInterest(20000,8.755,5))