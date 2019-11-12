function plus(str) {
    var s = str.split('plus');
    var hasil = 0
    for (i = 0; i < s.length; i++) {
        hasil += (parseInt(s[i]))
    }
    return hasil
}
console.log(plus("1plus1plus10plus9"))
