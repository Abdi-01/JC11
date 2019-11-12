function Tengah(string) {
    var output = string.split('')
    for (i = 0; i <= output.length; i++) {
        if (output.length % 2 != 0) {
            var hasil = output.length / 2
            return output[Math.ceil(hasil - 1)]
        }else{
            var hasil = output.length / 2
            return output[hasil-1]+output[hasil]
        }
    }
}
console.log(Tengah('Tenang'))

