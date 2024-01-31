calcularPromedioNotas = function(){
    let nt1 = recuperarFlotante("nta1");
    let nt2 = recuperarFlotante("nta2");
    let nt3 = recuperarFlotante("nta3");
    let promedio = calcularPromedio(nt1,nt2,nt3);
    let prf = promedio.toFixed(2);
    let mensaje = "Calificación "+prf;
    cambiarTexto("califi",mensaje);
    if (prf<5&&prf>0) {
        cambiarImagen("ima","tristeza.gif");
        cambiarTexto("cal","REPROBADO");
    } else if(prf>=5 && prf<=8) {
        cambiarImagen("ima","gj.gif");
        cambiarTexto("cal","BUEN TRABAJO");
    }else if(prf>8 && prf<=10) {
        cambiarImagen("ima","alegria.gif");
        cambiarTexto("cal","EXCELENTE");
    }else{
        cambiarImagen("ima","nope.gif");
        cambiarTexto("cal","DATOS INCORECTOS");
    }

}
