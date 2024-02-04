let ganar=0,perder=0;

jugar = function(seleccionado){
    let elemento = generarElemento();
    let rut = generarRuta(elemento);
    mostrarImagen("imas",rut);
    let ganador = determinarGanador(seleccionado,elemento);
    if (ganador==0) {
        mostrarTexto("ganar","EMPATE");
    }else if(ganador==1){
        ganar+=1;
        mostrarTexto("ganar","GANASTE LA PARTIDA");
        mostrarTexto("lblJugador",ganar)
        if (ganar==5) {
            mostrarTexto("ganar","HAS GANADO EL JUEGO");
            let x1 = recuperarCmp("cmpImg1");
            x1.hidden = true;
            let x2 = recuperarCmp("cmpImg2");
            x2.hidden = true;
            let x3 = recuperarCmp("cmpImg3");
            x3.hidden = true;}
    }else{
        mostrarTexto("ganar","PERDISTE LA PARTIDA");
        perder+=1;
        mostrarTexto("lblMaquina",perder)
        if (perder==5) {
            mostrarTexto("ganar","EL COMPUTADOR TE HA VENCIDO");
            let x1 = recuperarCmp("cmpImg1");
            x1.hidden = true;
            let x2 = recuperarCmp("cmpImg2");
            x2.hidden = true;
            let x3 = recuperarCmp("cmpImg3");
            x3.hidden = true;
            
        }
    }
}


limpiar= function(){
    mostrarTexto("lblJugador",0);
    mostrarTexto("ganar","...")
    mostrarTexto("lblMaquina",0)
    mostrarImagen("imas","IMG/inter.png");
    let x1 = recuperarCmp("cmpImg1");
    x1.hidden = false;
    let x2 = recuperarCmp("cmpImg2");
    x2.hidden = false;
    let x3 = recuperarCmp("cmpImg3");
    x3.hidden = false;
    ganar=0,perder=0;
}