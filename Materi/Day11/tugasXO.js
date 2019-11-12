function XO(string){
    var jumlahX = 0
    var jumlahO = 0
    var output = string.split('')
    for(i=0;i<output.length;i++){
        if(output[i]=='X'){
            jumlahX+=1
        }
        else if(output[i]=='O'){
            jumlahO+=1
        }
    }
    if(jumlahX==jumlahO){
        return true
    }
    else{
        return false
    }
}
console.log(XO('XOOOXX'))