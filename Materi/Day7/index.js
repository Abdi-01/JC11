// function looping(str,value){
//     var output=''
//     for(i=0;i<value;i++){
//         output+=str+'\n'
//     }
//     return output
// }
// console.log(looping('Andi',10))
// console.log("Aku Abdi Alghi".split(''))
//memisah huruf
function accummulate(str) {
    var s = str.split('');//mengubah input string menjadi array
    var output = ''
    for (i = 0; i < s.length; i++) {
        for (j = 0; j <= i; j++) {
            output += s[i]
        }
        if (i != s.length - 1) {
            output += '\n'
        }

    }
    return output
}
console.log(accummulate("Purwadhika"))
///menghitung tanda tanya
function Quetion(str) {
    var s = str.split('');
    var hasil = 0
    for (i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            hasil += 1
        }
    }
    return hasil
}
console.log(Quetion("a?aaa?aaaa????aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa??????????????????????????"))