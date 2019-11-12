// function kalidua(array){
//     for(i=0;i<array.length;i++){
//         array[i] *= 2
//     }
//     return array
// }
// console.log(kalidua([3,5,4,6,10,100,20,150]))

// function genapGanjil(array){
//     for(i=0;i<array.length;i++){
//         if(array[i]%2 === 0){
//             array[i] = true
//         }else{
//             array[i] = false
//         }
//     }
//     return array
// }

// console.log(genapGanjil([1,2,3,4,6,7,8,9]))

// function sum(nilai){
//     var hasil = 0
//     for(i=0;i<nilai.length;i++){
//         hasil += nilai[i]
//     }
//     return hasil
// }

// console.log(sum([1,2,3,10,20,30]))


//object
// var orang={
//     nama:'AL',
//     pekerjaan:'Programmer',
//     laptop:'dell'
// }

// console.log(orang.nama)

// class User{
//     constructor(nama,umur,email){
//         this.nama=nama,
//         this.umur=umur,
//         this.email=email
//     }
// }
// var AL = new User('Abdi',23,'abdi@yahoo.com')
// console.log(AL.umur)

class Market{
    constructor(produk,harga){
        this.produk=produk,
        this.harga=harga,
        this.contoh=function(){
            return this.produk + ' ' + this.harga
        }
    }
}
var menu =[]
// var AL = new Market('Buah Apel',10000)
// console.log(AL.contoh())

function tambahMarket(produk,harga){
    menu.push(new Market(produk,harga))
}
tambahMarket('Buah Jeruk', 5000)
console.log(menu)