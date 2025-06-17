const paranthesis = {
    '{':'}',
    '(':')',
    '[':']'
}
function isBalanced(inputString){
    const paranthesisArray = []
    for(let char of inputString){    
        if(paranthesis[char]){
            paranthesisArray.push(char)
        }
        else if(char === ')' || char === '}' || char === ']'){
            const lastOpeningParanthesis = paranthesisArray.pop()
            if(paranthesis[lastOpeningParanthesis]!== char){
                return false
            }
        }
    }
    // console.log(paranthesisArray)
    return paranthesisArray.length === 0
}
console.log(isBalanced('{[()]}'))
console.log(isBalanced('[{()}'))
console.log(isBalanced('{[(]}'))
console.log(isBalanced('{([])}'))
console.log(isBalanced('{[()]}'))