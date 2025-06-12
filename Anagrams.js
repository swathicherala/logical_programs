function isAnagram(input1,input2){
    let splittedString = input2.split('')
    for(let i=0; i<input1.length; i++){
        if(splittedString.length != input1.length || !splittedString.includes(input1[i])){
            return false
        }
    }
    return true
}
console.log(isAnagram('cat','act'))
console.log(isAnagram('cat','acts'))
console.log(isAnagram('elbow','below'))
console.log(isAnagram('elbow','bellow'))
console.log(isAnagram('heart','earth'))