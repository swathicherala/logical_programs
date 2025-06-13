function transposeMatrix(inputArray){
    const numberOfRows = inputArray.length
    const numberOfColumns = inputArray[0].length
    const result = []
    for(let i=0; i<numberOfRows; i++){
        for(let j=0; j<numberOfColumns; j++){
            if(!result[j]){
                result[j]=[]
            }
            result[j][i] = inputArray[i][j]
        }
    }
    return result
}
const inputMatrix = [ [3,4,8], [5,6,9]]
console.log(transposeMatrix(inputMatrix))

const inputMatrix2 = [ [3,4,8,11], [5,6,9,12]]
console.log(transposeMatrix(inputMatrix2))