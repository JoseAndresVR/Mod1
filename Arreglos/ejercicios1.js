
    let notaRecu;
    let notas=[];
agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length)

}

recorrerArreglo = function () {
    for (let i = 0; i < notas.length; i++) {
        notaRecu = notas[i];
        console.log(notaRecu);
    }
}

probarAgregar = function(){
    notaRecu = recuperarTexto("txtNota");
    agregarNota(notaRecu);
}


agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();
}

let sumaNotas=0,promedio;


calcularPromedio = function () {
    for (let i = 0; i < notas.length; i++) {
        sumaNotas +=parseFloat(notas[i]);
    }
    promedio = sumaNotas/notas.length;
    return promedio;
}

ejecutarPromedio = function () {
    let resultado = calcularPromedio();
    mostrarTexto("hTxt",resultado);
}


generarTabla = function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarNotas = function(){
    let cmpTabla=document.getElementById("divTabla"),contenidoTabla="<table><tr><th>NOTAS</th></tr></table>";
    for (let i = 0; i < notas.length; i++) {
        miNota =notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</td></tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
    
}