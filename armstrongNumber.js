function armstrongNumber(num){
    let splittedNum = num.toString().split('').map(Number)
    let result = 0
    for(let i=0; i<splittedNum.length; i++){
        let exponentNum = splittedNum[i]**splittedNum.length
        result += exponentNum
    }
    if(result === num){
        return true  
    }else{
        return false
    }
}
console.log('Armstrong Number:', armstrongNumber(153))
console.log('Armstrong Number:', armstrongNumber(2221))
console.log('Armstrong Number:', armstrongNumber(132))
console.log('Armstrong Number:', armstrongNumber(4210818))
console.log('Armstrong Number:', armstrongNumber(3))