//Hitung True
function trueFalse(str) {
    var hasil = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] === true) {
            hasil += 1
        }
    }
    return hasil
}
console.log(trueFalse([true,false,true,true,false,true,true]))

// function trueFalse(str) {
//     var tf = str.split('false')
//     var hasil = 0
//     for (i = 0; i < str.length; i++) {
//         hasil++
//     }
//     return hasil
// }
// console.log(trueFalse([true,false,true,true,false,true,true]))