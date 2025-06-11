function largestNumber(arrnumber){
    let result = 0
    for(let i=0; i<arrnumber.length; i++){
        if(arrnumber[i]>result){
            result = arrnumber[i]
        } 
        
    }
    return result   
}
console.log(largestNumber([3,100,6,8,1]))
console.log(largestNumber([101,100,6,8,1]))
console.log(largestNumber([3,10,6,8,11]))
console.log(largestNumber([3,1,6,8,1,33,21,55,16]))
console.log(largestNumber([3,100,6,8,1,44,33,21,88,96]))