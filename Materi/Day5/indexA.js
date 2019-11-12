// function coba(){
//     console.log('Fungsi')
// }
// coba()

// function penjumlahan(a,b){
//     return console.log(a+b)
// }
// penjumlahan(5,6)

// function namaku (nama){
//     console.log(nama += ' adalah namaku')
// }
// namaku('Mikhael')
// namaku('Dhio')
// namaku('AL')

// function operasi(x,y){
//     var z = x+y
//    // z = 'Pengurangan : '+x+y
//     return z//return untuk meminta hasil dari variable
// }
// console.log(operasi(15,5))

function detek(angka){
    z = angka%2
    if(z==0){
        return angka+' Angka Genap'
    }else{
        return angka+' Angka Ganjil'
    }
}
console.log(detek(10))