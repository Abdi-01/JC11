//var a = 0
// while(a<0){
//     console.log('do while')
// }

// for(var i=0;i<=5;i++){
//     console.log('Nomor : '+i)
// }
// console.log('\n')
// for(var j=0;j<10;j+=2){
//     console.log('Genap : '+j)
// }
// console.log('\n')
// for(var k=1;k<10;k+=2){
//     console.log('Ganjil : '+k)
// }
// // console.log('\n')

// let hasil1 =''
// for(a=0;a<5;a++){
//     hasil1+='x '
// }
// console.log(hasil1)

// //console.log('\n')
// let hasil2 =''
// for(b=0;b<5;b++){
//     hasil2+='x \n'
// }
// console.log(hasil2)

// let hasil3 =''
// for(var i=0;i<5;i++){
//     for(var k=0;k<5;k++){//membuat 5 bintang dulu hingga memenuhi kondisi looping k<5
//         hasil3+='x '
//     }
//     hasil3+='\n'//hasi dari sebelumnya dicetak kembali dan ditambah enter
//     //console.log(hasil)
// }
// console.log(hasil3)


function ngomong(nama,fn){

    console.log(`Nama saya ${nama}`)
    console.log('Nama saya ' + nama)


}

ngomong('Hilmi')



// console.log('\n')
// let hasil4 =''
// for(z=0;z<5;z++){
//     for(k=0;k<5;k++){//selama kondisi pada for masih true, maka proses akan berjalan
//         hasil4+='x '
//         if(k==z){
//             break;
//         }
//     }
//     hasil4+='\n'
// }
// console.log(hasil4)

// let hasil5 =''
// for(z=0;z<5;z++){
//     for(k=0;k<5;k++){
//         hasil5+='x '
//         if((k+z)==4){
//             break;
//         }
//     }
//     hasil5+='\n'
// }
// console.log(hasil5)

// var hasil4 =''
// for(z=0;z<=5;z++){
//     for(j=5;j>=z;j--){
//         hasil4+=' '
//     }
//     for(k=0;k<z;k++){//selama kondisi pada for masih true, maka proses akan berjalan
//         hasil4+='x '
//     }
//     hasil4+='\n'
// }
// console.log(hasil4)

// let hasil4 =''
// for(z=0;z<=5;z++){
//     // for(j=5;j<=z;j--){
//     //     hasil4+=' '
//     // }
//     for(k=0;k<z;k++){//selama kondisi pada for masih true, maka proses akan berjalan
//         hasil4+='x '
//     }
//     if (z != 5){
//         hasil4+='\n'
//     }
    
// }
// console.log(hasil4)

// let hasil5 =''
// for(z=0;z<=5;z++){
//     for(k=5;z<k;k--){//selama kondisi pada for masih true, maka proses akan berjalan
//         hasil5+='x '
//     }
//     // if(z==4){
//     //     break;
//     // }
//     hasil5+='\n'
// }
// console.log(hasil5)

// let hasil4 =''
// for(z=1;z<=5;z++){
//     // for(j=5;j<=z;j--){
//     //     hasil4+=' '
//     // }
//     for(k=0;k<z;k++){//selama kondisi pada for masih true, maka proses akan berjalan
//         hasil4+='x '
//     }
//     if (z != 5){
//         hasil4+='\n'
//     }
    
// }
// console.log(hasil4)



function ngomong(nama, fungsilain, fungsilain2){
    return `Nama saya ${nama}. ${fungsilain} dan ${fungsilain2}`
}

function lapar(){
    return 'Saya sedang lapar'
}
function pusing(){
    return 'Saya sedang pusing'
}

console.log(ngomong('Hilmi', lapar(), pusing()))