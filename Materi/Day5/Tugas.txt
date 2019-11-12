let hari = 30
let catatanAL = ''
let permen = 0
for(x=1;x<=30;x++){
    if(x%2 == 0){
        catatanAL+='Ini adalah hari ke : '+ x + '. AL mendapat permen ' + (x%2+1) +'\n'
    }else{
        catatanAL+='Ini adalah hari ke : '+ x + '. AL mendapat permen '+ (x%2+1)+'\n'
    }
    permen= (permen + (x%2+1))
}

console.log(catatanAL+'\n'+'Jumlah permen '+ permen)