
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
    console.log(notas.length);
}

let sumaNotas=0,promedio;

probarAgregar2 = function(){
    notaRecu = recuperarInt("txtNota");
}

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