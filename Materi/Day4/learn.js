let hasil4 =''
for(z=0;z<=5;z++){
    for(j=5;z<j;j--){
        hasil4+='  '
    }
    for(k=0;k<z;k++){//selama kondisi pada for masih true, maka proses akan berjalan
        hasil4+='x '
    }
    //if (z != 5){
        hasil4+='\n'
    //}
    
}
console.log(hasil4)