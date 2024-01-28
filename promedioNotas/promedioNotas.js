calcularPromedioNotas = function(){
    let nt1 = recuperarFlotante("nta1");
    let nt2 = recuperarFlotante("nta2");
    let nt3 = recuperarFlotante("nta3");
    let promedio = calcularPromedio(nt1,nt2,nt3);
    let prf = promedio.toFixed(2);
    let mensaje = "Calificación "+prf;
    cambiarTexto("califi",mensaje);


}
