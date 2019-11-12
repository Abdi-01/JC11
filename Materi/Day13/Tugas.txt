var arrA = [500,50,30,1]
var arrB = [5,1,2,10,13,2]
var arrC = [100,5,10,2,3,5]

function sum(arr)
{   var b =0
    arr.sort(function(a,b){return a-b});
    b=arr[0]+arr[1]
    return b
}

console.log(sum(arrA))
