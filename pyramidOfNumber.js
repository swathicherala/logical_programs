function pyramidOfNum(num){
    for(let i=1; i<=num; i++){
        let linecontent = ""
        for(let space=1; space<=num-i; space++){
            linecontent = linecontent + " "
        }
        for(let count=1; count<=i; count++){
            linecontent = linecontent + count
        }
        for(let reversecount=i-1; reversecount>=1; reversecount--){
            linecontent = linecontent + reversecount
        }
        console.log(linecontent)
    }
}
pyramidOfNum(5)