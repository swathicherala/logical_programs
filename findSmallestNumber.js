function findSmallestNumber(num1, num2, num3){
        if(num1<num2 && num1<num3){
            // console.log(`${num1} is the smallest number`)
            return num1
        } else if(num2<num1 && num2<num3){
            // console.log(`${num2} is the smallest number`)
            return num2
        } else if(num3<num1 && num3<num2){
            // console.log(`${num3} is the smallest number`)
            return num3
        } else{
            return num1
        }
}
// const num1= 3, num2= 5, num3 = 6
// findSmallestNumber(num1, num2, num3)
console.log(`Smallest number in (32,31,93) is ${findSmallestNumber(32,31,93)}`)
console.log(`Smallest number in (3,3,3) is ${findSmallestNumber(3,3,3)}`)
console.log(`Smallest number in (3,3,5) is ${findSmallestNumber(3,3,5)}`)
console.log(`Smallest number in (-10,3,5) is ${findSmallestNumber(-10,3,5)}`)
