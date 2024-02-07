let caracter,resultado="";
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

