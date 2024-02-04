calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let errores=false;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
	nota3 = recuperarFloat("txtNota3");
    if (esNotaValida(nota2,"lblError2")&&esNotaValida(nota2,"lblError2")&&esNotaValida(nota3,"lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }else{
        mostrarTexto("lblResultado", "0.0");

    }
}


esNotaValida = function(nota,ida){
    let hayerrores =false;
    if(isNaN(nota)){
        mostrarTexto(ida, "Ingrese un valor valido");
        hayerrores =true;
    }
    if (nota>=0 && nota<=10) {
        mostrarTexto(ida,"Debes ingresar un numero entre 0 y 10");
        hayerrores=true; 
    }
    if(hayerrores==false){
        mostrarTexto(ida, "");
    }

    return !hayerrores;
}