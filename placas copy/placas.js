validarPlaca=function(){
    let placainfo=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placainfo);

if(erroresEstructura==null){
    mostrarTexto("lblVali","ESTRUCTURA VALIDA");
    let provincia = obtenerProvincia(placainfo);
    mostrarTexto("lblProvincia",provincia);
    let vehiculo = obtenerTipoDeVehiculo(placainfo);
    mostrarTexto("lblVehiculo",vehiculo);
    let circulacion = obtenerDiaPicoYPlaca(placainfo);
    mostrarTexto("lblCirculacion","NO PUEDE CIRCULAR LOS DIAS: "+circulacion);
}else{
    mostrarTexto("lblVali","ESTRUCTURA INCORRECTA");
    mostrarTexto("lblErores",erroresEstructura);
}

}

limpiar = function(){
    mostrarTexto("lblVali","...");
    mostrarTexto("lblProvincia","...");
    mostrarTexto("lblVehiculo","...");
    mostrarTexto("lblCirculacion","...");
    mostrarTexto("lblErores","...");
    mostrarTextoEnCaja("txtPlaca","");
}