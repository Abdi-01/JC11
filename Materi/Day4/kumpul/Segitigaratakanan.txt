let hasil =''
for(z=0;z<=5;z++){
    for(j=0;j<z;j++){
        hasil+='  '
    }
    for(k=5;k>z;k--){//selama kondisi pada for masih true, maka proses akan berjalan
        hasil+='x '
    }
    if (z != 5){
        hasil+='\n'
    }
    
}
console.log(hasil)

let hasilB =''
for(z=1;z<=5;z++){
    for(j=5;z<j;j--){
        hasilB+='  '
    }
    for(k=0;k<z;k++){//selama kondisi pada for masih true, maka proses akan berjalan
        hasilB+='x '
    }
    if (z != 5){
        hasilB+='\n'
    }
    
}
console.log(hasilB)