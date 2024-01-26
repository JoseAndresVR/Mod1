recuperación=function(ids){
    console.log("Hola");
    let nam = document.getElementById(ids);
    let vl = nam.valsue;
    return vl
}

saludar = function(){
    let nombre=recuperación("ncm");
    let apellido = recuperación("acm")
}