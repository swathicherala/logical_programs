const isAnagram = (str1, str2) =>{
    // Convert to lowercase and remove spaces
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // If lengths don't match, they can't be anagrams
  if (str1.length !== str2.length) return false
    let result = {}
    for(let i=0; i<str1.length; i++){
       let char = str1[i]
       if(result[char]){
        result[char] += 1
       }else{
        result[char] = 1
       }
    }
    for(let i=0; i<str2.length; i++){
        let char = str2[i]
       if(!result[char]){
        return false
       }
       result[char]--
    }

    for(let key in result){
        if(result[key] !== 0){
            return false
        }
    }
    return true

}
console.log(isAnagram('listen','silent'))
console.log(isAnagram('listenp','silents'))
console.log(isAnagram('hello','world'))
console.log(isAnagram('cat','act'))
console.log(isAnagram('cat','acts'))
console.log(isAnagram('elbow','below'))
console.log(isAnagram('elbow','bellow'))
console.log(isAnagram('heart','earth'))
