function averageOfNumbers(arrInput){
    let sum = 0
    for(let i=0; i<arrInput.length; i++){
       sum = sum + arrInput[i]
    }
    let result = sum / arrInput.length
    return result
}
console.log('Average of Inputs', averageOfNumbers([1,2,4]))