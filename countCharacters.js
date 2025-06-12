function countCharacters(inputString){
    inputString = inputString.toLowerCase()
    let result = {}
    for(let i=0; i<inputString.length; i++){
        let char = inputString[i]
        if(result[char]){
            result[char] = result[char] + 1
        }else{
            result[char] = 1 
        }
    }
    return result
}
console.log(countCharacters("Shobha Cherala"))