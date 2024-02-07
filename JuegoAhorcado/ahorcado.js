//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let x=0,palabraSecreta,intentos=0,coincidencias=0,errores=0;
esMayuscula = function(caracter){
    let x = caracter.charCodeAt();
    if(x >= 65 && x<=90){
        return true;
    } else{
        return false;
    }
}
guardarPalabra = function(){
    let pal = recuperarTexto("txtSecreta"),letra;
    for (let i = 0; i < pal.length; i++) {
        letra = pal.charAt(i);
        if (esMayuscula(letra)) {
            x++;
        }
        
    }
    if (pal.length==5 && x==5){
        palabraSecreta = pal;
        x=0;
    }else{
        alert ("Debes ingresar 5 letras mayusculas");
    }
}

mostrarLetra=function(posicion,letra){
    mostrarTexto("div"+posicion,letra);
}

validar = function(letra){ 
    let letrasEncontradas=0,pal2;
    for (let i = 0; i < palabraSecreta.length; i++) {
        pal2 = palabraSecreta.charAt(i);
        if (letra==pal2 && i==0) {
            mostrarLetra(i,letra);
            letrasEncontradas++
        }else if (pal2==letra && i==1) {
            mostrarLetra(i,letra);
            letrasEncontradas++
        }else if (pal2==letra && i==2) {
            mostrarLetra(i,letra);
            letrasEncontradas++
        }else if (pal2==letra && i==3) {
            mostrarLetra(i,letra);
            letrasEncontradas++
        }else if (pal2==letra && i==4) {
            mostrarLetra(i,letra);
            letrasEncontradas++
        }
    }
    if (letrasEncontradas==0) {
        alert("La letra no es parte de la palabra");
        errores++;
    }
}

ingresarLetra=function () {
    let letra = recuperarTexto("txtLetra");
    intentos++;
    if (intentos==10) {
        alert("Ha perdidio");
    }else{
        if (esMayuscula(letra)) {
            validar(letra);
            coincidencias++
            if (coincidencias==5) {
                alert("HA GANADO")
            }
        }else{
            alert("Solo se aceptan Mayusculas");
        }
    }
    
}
