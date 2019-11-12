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

// function ulang(arr) {
//     var idenN = []
//     for (i = 0; i < arr.length; i++) {
//         var hasil = arr[i].nama
//         idenN.push(hasil += hasil)
//     }
//     return idenN
// }
function ulang(arr) {
    var idenN = []
    var n =''
    for (i = 0; i < arr.length; i++) {
        var hasil = arr[i].nama
        for(j=0;j<hasil.length;j++){
            n += hasil
        }
        idenN.push(n)
        n=''
    }
    return idenN
}

console.log(ulang(iden))
