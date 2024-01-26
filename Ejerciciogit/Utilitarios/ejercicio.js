recuperación=function(ids){
    console.log("Hola");
    let nam = document.getElementById(ids);
    let vl = nam.value;
    return vl
}
recuperaciónint=function(ids){
    console.log("Hola");
    let nmr = document.getElementById(ids);
    let num = parseInt(nmr.value);
    return num;
}
recuperaciónfloat=function(ids){
    console.log("Hola");
    let nmr = document.getElementById(ids);
    let num = parseFloat(nmr.value);
    return num;
}

saludar = function(){
    let nombre=recuperación("ncm");
    let apellido = recuperación("acm");
    let edad = recuperaciónint("edcm");
    let estatura = recuperaciónfloat("escm");
}