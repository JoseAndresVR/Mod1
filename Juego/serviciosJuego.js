obtenerAleatorio = function () {
    let ramd,numMul,numEn;
    ramd = Math.random();
    numMul=ramd*3;
    numEn = parseInt(numMul)
    let val = numEn+1;
    return val;
}

generarElemento = function () {
    let x = obtenerAleatorio();
    if (x==1) {
        return "Piedra";
    }else if (x==2) {
        return "Papel";
    }else{
        return "Tijera";
    }
}

determinarGanador= function(eleccionJugador1,eleccionJugador2){
    if (((eleccionJugador1=="Piedra")&&(eleccionJugador2=="Tijera")||((eleccionJugador1=="Papel")&&(eleccionJugador2=="Piedra"))||(eleccionJugador1=="Tijera")&&(eleccionJugador2=="Papel"))) {
        return 1;
    }else if(((eleccionJugador1=="Piedra")&&(eleccionJugador2=="Piedra")||((eleccionJugador1=="Papel")&&(eleccionJugador2=="Papel"))||(eleccionJugador1=="Tijera")&&(eleccionJugador2=="Tijera"))){
        return 0;
    }else {
        return 2;
    }
}


generarRuta= function(nombre){
    if (nombre=="Piedra") {
        return "./IMG/piedra.png";
    }else if (nombre=="Papel") {
        return "./IMG/papel.png";
    }else{
        return "./IMG/tijera.png";
    }
}
