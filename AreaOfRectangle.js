
function areaOfRect(length,width){
    if(length > 0 && width > 0){
        const area = length*width
        console.log('Area Of Rectangle is:', area)
    }else{
        throw new Error('Length and Width should be positive number')
    }
}
areaOfRect(4,5)
areaOfRect(19,29)