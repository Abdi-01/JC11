// var hasil=''
// var a =0
// while (a<5) {
//     var b=0
//     while(b<a){
//         hasil+='*'
//         b++
//     }
//     hasil+='\n'
//     a++    
// }
// console.log(hasil)

var output =''
for(i=0;i<10;i++){
    for(j=0;j<i;j++){
        output+='-'
    }
    for(k=9;k>i;k--){
        output+='Y'
    }
    output+='\n'
}
console.log(output)