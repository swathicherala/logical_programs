function strongPasswordChecker(password){
    password = password.trim()
    if(password.length<8){
        return false
    }
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const specialChar = '!@'
    let lowerCaseCharactersExist = false
    let upperCaseCharactersExist = false
    let numbersExist = false
    let specialCharExist = false
    for(let i=0; i<password.length; i++){
        if(lowerCaseCharacters.includes(password[i])){
            lowerCaseCharactersExist=true
        }else if(upperCaseCharacters.includes(password[i])){
            upperCaseCharactersExist=true
        }else if(numbers.includes(password[i])){
            numbersExist=true
        }else if(specialChar.includes(password[i])){
            specialCharExist=true
        }
    }
    if(lowerCaseCharactersExist && upperCaseCharactersExist && numbersExist && specialCharExist){
        return true
    }
    return false
}
console.log('@SwathiC',strongPasswordChecker('@SwathiC1'))
console.log('SwathiC',strongPasswordChecker('SwathiC@'))
console.log('swathiC2@',strongPasswordChecker('swathiC2'))
console.log('SWATHIc4@',strongPasswordChecker('SWATHIc4@'))
console.log('@SwathiC',strongPasswordChecker('SwAtHiChalla5@'))


//using regex
function strongPasswordChecker2(password) {
    password = password.trim();
    
    return password.length >= 8 &&
        /[a-z]/.test(password) &&         // has lowercase
        /[A-Z]/.test(password) &&         // has uppercase
        /[0-9]/.test(password) &&         // has digit
        /[!@]/.test(password);            // has special char (customize as needed)
}

console.log(strongPasswordChecker2('@SwathiC1'));      // true
console.log(strongPasswordChecker2('SwathiC@'));       // false (no digit)
console.log(strongPasswordChecker2('swathiC2'));       // false (no special char)
console.log(strongPasswordChecker2('SWATHIc4@'));      // true
console.log(strongPasswordChecker2('SwAtHiChalla5@')); // true
