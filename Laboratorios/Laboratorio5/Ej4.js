function Adivine(num){
    arreglo=[];
    var random;
    for(var i=0;i<20;i++){
        random=(Math.floor(Math.random()*100)+1);
        arreglo.push(random);
    }
        for(var j=0;j<20;j++){
            if(num===arreglo[j]){
                console.log("adivinaste");
            }
            else{
                console.log("incorrecto");
            }
        }
        return arreglo;
}