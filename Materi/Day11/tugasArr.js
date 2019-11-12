function arr(array,number){
    for(i=0;i<array.length;i++){
        array[i]*=number
    }
    return array
}

console.log(arr([2,3,4,10,20],3))