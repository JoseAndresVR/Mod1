recuperación=function(ids){
    console.log("Hola");
    let nam = document.getElementById(ids);
    let vl = nam.value;
    return vl
}

saludar = function(){
    let nombre=recuperación("ncm");
    let apellido = recuperación("acm")
}