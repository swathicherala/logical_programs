function swappingNumbers(a,b){
    let c = a
    a = b
    b = c
    return {a,b}
}
console.log('Swapping Numbers:', swappingNumbers(4,5))

function swappingNumbersWithoutThirdNum(a,b){
    a = b + a // 9
    b = a - b // 9 - 5 = 4
    a = a - b // 9 - 4 = 5
    return {a,b}
}
console.log('Swapping Numbers:', swappingNumbersWithoutThirdNum(4,5))