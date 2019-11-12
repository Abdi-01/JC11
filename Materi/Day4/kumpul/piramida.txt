let hasil = ''
for(a=0;a<=10;a++){
    for(b=10;b>a;b--){
        hasil+=' '
    }
    for(c=0;c<a;c++){
        hasil+='x '
    }
    if(a!=10){
        hasil+='\n'
    }
}
console.log(hasil+'\n')


let hasilB = ''
for(a=0;a<=10;a++){
    for(b=0;b<a;b++){
        hasilB+=' '
    }
    for(c=10;c>a;c--){
        hasilB+='x '
    }
    if(a!=10){
        hasilB+='\n'
    }
}
console.log(hasilB)