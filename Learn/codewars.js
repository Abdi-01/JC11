// Membalikkan urutan
// function swapValues(value) {
//     var i = value.reverse()
//     return i
// }

// console.log(swapValues([1,2]))

// memberi bahaya pada kambing yang dekat dengan serigala
// function warnTheSheep(queue) {
//     var s = queue.reverse()
//     var Sheep = 0
//     var hasil = ''
//     for (i = s.length; i > 0; i--) {
//         if (s[i] === 'wolf') {
//           Sheep += (i)            
//         }
//     }
//     if(s[0] === 'wolf'){
//         return "Pls go away and stop eating my sheep"
//     }
//     return hasil += "Oi! Sheep number "+ Sheep +"! You are about to be eaten by a wolf!"
// }

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))

// function sumOfDifferences(arr) {
//     var a = arr.reverse()
//     var sum = 0
//     for (i = 0; i < a.length; i++) {
//         if (i < a.length) {
//             sum += parseInt(a[i]) - parseInt(a[i + 1])
//         }
//         if (i>a.length-3) {
//             break;
//         }
//     }
//     return sum
// }

// console.log(sumOfDifferences([1, 2, 10]))

// function monkeyCount(n) {
//     // your code here
//     var hasil = ''
//     for (i = 0; i < n; i++) {
//         hasil += n - i+' '
//     }
//     var monkey = hasil.split(' ')     
//     monkey.pop()
//     monkey.reverse()
//     return monkey.map(Number)
// }
// console.log(monkeyCount(5))

function invert(array) {
    // var hasil = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i]= -(array[i])
        }
        else if (array[i] < 0) {
            array[i]= -(array[i])
        }
    }
    return array;
}
console.log(invert([0]))