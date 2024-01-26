saludar = function(){
    let nombre=recuperación("ncm");
    let apellido = recuperación("acm");
    let edad = recuperaciónint("edcm");
    let estatura = recuperaciónfloat("escm");
    let mensajeB = "Bienvenido "+nombre+" "+apellido;
    mostrarT("tecm",mensajeB);  
    mostrarI("iman","../imagenes/g3.gif");
    mostrarTC("ncm","");
}