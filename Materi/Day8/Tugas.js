// // // var user = {
// // //     nama : 'lian',
// // //     marga: 'eddy',
// // //     namaFull : function(){
// // //         return this.nama +' '+ marga
// // //     }
// // // }


// // // console.log(user.namaFull())

// // // var andi = new Object
// // // andi.namaDepan = 'andi'
// // // andi.namaBelakang = 'susilo'
// // var andi = {
// //     namaDepan: 'andi',
// //     namaBelakang: 'susilo',
// //     usia : 32
// // }
// // console.log(andi.namaDepan + ' ' +andi.namaBelakang)


// class User {
//     constructor(nama, password, email){
//         this.nama = nama,
//         this.password = password,
//         this.email = email
//     }
// }

// var lian = new User('lian', '123', 'lian.eddy@gmail.com')
// var susilo = new User('susilo', 'asd', 'susi@ymail.com')
// var agus = new User('agus', 'qweqweqwe', 'agus@emial.com')

// class Product{
//     constructor(a,b){
//         this.nama = a,
//         this.harga = b
//     }
// }

// var menu = []
// // var mangga = new Product('mangga', 10000)
// // var jeruk = new Product('jeruk', 20000)
// // var duren = new Product('duren', 30000)

// function tambahMenu(nama, harga){
//     menu.push(new Product(nama, harga))
// }

// tambahMenu('kiwi', 20000)
// tambahMenu('apel', 1000)
// // console.log(menu[1])

// var orang = {
//     nama : 'lian',
//     job : 'coder'
// }

// // console.log(orang['job'])

// var arr = [
//     { 
//         pintu : true, 
//         jendela : [
//             2,4, {
//                 laptop :  'asus'
//             }
//         ] 
//     },
//     ['lian', 22, {
//         spidol : {
//             whiteboard: true
//         }
//     }],
//     ['5', 5]
// ]
// console.log(arr[1][2].spidol.whiteboard)

var tugas = [
    {
        menu : [{
            nama: 'mangga',
            harga: 20000
        }, {
            nama: 'duren',
            harga : 20000
        }, {
            nama: 'nanas',
            harga: 40000,
            stock : [true ,false]
            //ambil false
        }]
    },

    {
        pekerjaan : [1,4,5,[59,8, {
            umur : 90
            //ambil 90
        }]]
    },

    [
        {
            budi: {
                caca : 'yes'
                //ambil yes
            }
        }
    ]
]

console.log(tugas[0].menu[2].stock[1])
console.log(tugas[1].pekerjaan[3][2].umur)
console.log(tugas[2][0].budi.caca)