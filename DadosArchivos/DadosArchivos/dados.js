jugar = function(){
    let alt
   alt=lanzard();
   cambiarTexto("lblNumero",alt);
   if (alt>3) {
        cambiarTexto("mensaje","Es mayor a 3, Ganaste");
   }else{
        cambiarTexto("mensaje","Es menor a 3, Sigue participando");
   }
   
}

lanzard = function(){
    let ramd,numMul,numEn;
    ramd = Math.random();
    numMul=ramd*6;
    numEn = parseInt(numMul)
    let val = numEn+1;
    return val;

}