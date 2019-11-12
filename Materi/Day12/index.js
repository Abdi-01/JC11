// var nama = 'Abdi'
// var nama2 = `Nama saya \n ${nama}`

// //console.log(nama2)
// console.log(nama.repeat(5))//repeat : mengulang isi dari variable secara constant
// console.log(nama.includes('M'))//include : untuk mencari string pada sebuah variable

// console.log(nama.startsWith('d',2))

// var arr = [1,2,3,4]
// //console.log(arr.join(''))
// function jumlah(x,y,z){
//     console.log(x+y+z)
// }

// jumlah(...arr)

// let kali = (a,b) => a*b
// let bagi = (a,b) => a/b
// let hitung = (angka1,angka2,op) => op(angka1,angka2)
// console.log(hitung(4,2,kali))

// var nama = ['abdi', 'mikhel', 'ibnu', 'ali']
// var y = nama.filter(val => val.length <= 4)
// console.log(y)


// // var id = iden.filter(val => val.usia<23)
//var id = iden.map(val => val.nama.repeat(4))
// console.log(id)


// var abdi = {
//     nama: 'abdi',
//     usia: 23,
//     job: 'CEO'
// }

// var arr = ['abdi', 23, 'CEO']

// var [x, y, z, a] = id

// console.log(id)

var iden = [
    {
        nama:'Abdi',
        usia: 23
    },
    {
        nama:'Ibnu',
        usia: 24
    },
    {
        nama:'Mikhel',
        usia: 20
    },
    {
        nama:'Hilmi',
        usia: 22
    }
]

function orang(array, nama){
    var n = array.filter(val=>val.usia<24)
    var fn = n.map(val => val.nama)
    return nama(fn)
}

function tambahNama(iden){
    return `${iden} dibawah umur`
}

console.log(orang(iden,tambahNama))

//function