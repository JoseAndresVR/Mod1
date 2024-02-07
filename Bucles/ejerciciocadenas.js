let caracter,resultado="",contadorMayus;
ejecutarPrueba=function(){
    let mens;
    mens=recuperarTexto("txtCadena");
    recorrerCadena(mens);
}
ejecutarPrueba2=function(){
    let mens;
    mens=recuperarTexto("txtCadena");
    invertirCadena(mens);
}


recorrerCadena= function (cadena) {
    for (let pos = 0; pos < cadena.length; pos++) {
        caracter = cadena.charAt(pos);
        console.log(caracter+" "+pos);
        
    }
}

invertirCadena= function (cadena) {
    for (let pos = cadena.length; pos >=0 ; pos--) {
        caracter = cadena.charAt(pos);
        resultado += caracter; 
    }
    
    mostrarTexto("lblTx",resultado);
}

buscarLetra=function(cadena,letra){
    let lent,existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        lent = cadena.charAt(i);
        if (lent==letra) {
            existeLetra=true;
        }
    }
    if (existeLetra==true) {
        return true;
    }else{
        return false;
    }
}

contarMayus = function(cadena) {
    let letra;
    for (let i = 0; i< cadena.length; i++){
        letra = cadena.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayus++;
        }
    }
    console.log(contadorMayus);
}

