esMayuscula = function(caracter,numero){
    let x = caracter.charCodeAt(numero);
    if(x >= 65 && x<=90){
        return true;
    } else{
        return false;
    }
}

esDigito = function(caracter,numero){
    let x = caracter.charCodeAt(numero);
    if(x >= 32 && x<=255){
        return true;
    } else{
        return false;
    }
}

esGuion = function(caracter){
    let x = caracter.charCodeAt(3);
    if(x == 45){
        return true;
    } else{
        return false;
    }
}
