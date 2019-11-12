// function perkenalan(nama, fnc){
//     var a = `Nama saya ${nama}`
//     return fnc(a)
// }
// function sekolah(str){
//     return `${str}, saya sekolah di Purwadhika`
// }

// console.log(perkenalan('Abdi', sekolah))

// var arr = [2,3,4]

// function newArr(arrN, fn){
//     var o =[]
//     for(i=0;i<arrN.length;i++){
//         o.push(fn(arrN[i]))
//     }
//     return o
// }

// function pengali(num){
//     return num * 2
// }
// function pembagi(num){
//     return num / 2
// }
// function pengurang(num){
//     return num - 2
// }
// function penambah(num){
//     return num + 2
// }

// function ganjilGenap(num){
//     if(num%2==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(newArr(arr, ganjilGenap))
var nama =['Ibnu', 'Carel', 'Mikhel']
function keren(nama, fnc){
    var output = []
    for(i=0;i<nama.length;i++){
        output.push(fnc(nama[i]))
    } 
    return output
}
function pujian(str){
    return `${str} keren`
}

console.log(keren(nama, pujian))


var iden = [
    {
        nama: 'Abdi',
        usia: 23
    },
    {
        nama: 'Ibnu',
        usia: 24
    },
    {
        nama: 'Mikhel',
        usia: 20
    },
    {
        nama: 'Hilmi',
        usia: 22
    }
]

function ulang(arr,fn) {
    var idenN = []
    for (i = 0; i < arr.length; i++) {
        var hasil = arr[i].nama
        idenN.push(fn(hasil))
    }
    return idenN
}

function loop(str){
    var s =''
    for(j=0;j<3;j++){
        s+=str
    }
    return s
}

console.log(ulang(iden,loop))