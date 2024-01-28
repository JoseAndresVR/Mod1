let resultado,puntaje=0,lanzamientos=5;
jugar=function(){
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara();
    modificaPuntaje(resultado);
    modificarLanzamientos();
}

modificaPuntaje = function(numero){
    puntaje+=numero;
    cambiarTexto("lbpun",puntaje)
    if(puntaje>=20){
        alert("Felicidades ganaste");
        limpiar();
    }
}

modificarLanzamientos = function(){
    lanzamientos-=1;
    cambiarTexto("lblan",lanzamientos);
    if (lanzamientos==0) {
        alert("Lo siento perdiste");
        limpiar();
    }
}


mostrarCara=function(){
    if(resultado==1){
        cambiarImagen("imgDado","dados1.png");
    }else if(resultado==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(resultado==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(resultado==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(resultado==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(resultado==6){
        cambiarImagen("imgDado","dados6.png");
    }
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}

limpiar = function(){
    cambiarTexto("lbpun",0)
    cambiarTexto("lblan",5)
    puntaje=0;
    lanzamientos=5;
    cambiarImagen("imgDado","")
}