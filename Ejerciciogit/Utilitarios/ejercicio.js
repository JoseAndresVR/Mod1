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

mostrarT = function(ids,msj){
    let com = document.getElementById(ids);
    com.innerText = msj;
}

mostrarI = function(ids,ruta){
    let cmp = document.getElementById(ids);
    cmp.src = ruta;
}

mostrarTC = function(ids,msj){
    let nam = document.getElementById(ids);
    nam.value = msj;
}

