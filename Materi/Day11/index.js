// function fizbuz(angka) {
//     var fizz = 'Fizz'
//     var buzz = 'Buzz'
//     for (i = 1; i <= angka;i++){
//         if(i%3===0 && i%5===0){
//             console.log(fizz+buzz)
//         }
//         else if(i%3===0){
//             console.log(fizz)
//         }
//         else if(i%5===0){
//             console.log(buzz)
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// console.log(fizbuz(20))


//fibonanci

// function fibonanci(fibo){
//     var sum = [0,1]
//     for(i=2;i<=fibo;i++){
//         sum.push(sum[i-2] + sum[i-1])
//     }
//     return sum
// }

// console.log(fibonanci(10))


// // //palindrome
// function palindrome(string){
//     var text = string.split('')
//     text.reverse()
//     var text2 = text.join()
//     if(string === text2){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(palindrome('sakti'))

///invertplusminus

// function plusminus(array){
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             array[i]= -(array[i])
//         }
//         else if (array[i] < 0) {
//             array[i]= -(array[i])
//         }
//     }
//     return array;
// }

// console.log(plusminus([-1,2,-1,3,0]))

// function factorial(angka) {
//     output = angka
//     if (angka == 1 || angka == 0) {
//         return 1
//     } else {
//         for (i = angka; i > 1; i--) {
//             output *= (i-1)
//         }
//     }
//     return output
// }

// console.log(factorial(3))

// function timeConvert(angka){
//     var jam = angka/60
//     var output = Math.floor(jam)
//     return output+':'+(angka%60)
// }

// console.log(timeConvert(360))

function remove(string){
    var hasil = string.split('')
    hasil.pop()
    hasil.shift()
    var hasil2 = hasil.join('')
    return hasil2
    
}

console.log(remove('susilo'))