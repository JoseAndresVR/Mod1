let valUi;
Alt = function(){
    let ramd,numMul,numEn,val;
    ramd = Math.random();
    numMul=ramd*100;
    numEn = parseInt(numMul)
    val = numEn+1;
    return val;
}
generarAleatorios = function () {
    let aleatorios=[],valorAlt;
    valUi=recuperarInt("txtUsuario")
    if (valUi>=5 && valUi<=20) {
        for (let i = 0; i <valUi; i++) {
            valorAlt = Alt();
            aleatorios.push(valorAlt);
        }
        mostrarResultados(aleatorios);
    }else{
        alert("Deben ser numeros entres 5 y 20");
    }
}

mostrarResultados = function (arregloNumeros) {
    let contenidoTabla="<table><tr><th>NUMEROS</th></tr>";
    for (let i = 0; i < 1; i++) {
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arregloNumeros;
        contenidoTabla+="</td></tr>"
    }
    contenidoTabla+="</table>";
    mostrarTexto("divResultado",contenidoTabla);
}