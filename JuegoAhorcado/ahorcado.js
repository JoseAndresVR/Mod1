//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let x=0,palabraSecreta;
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
    }else{
        alert ("Debes ingresar 5 letras mayusculas");
    }
}

mostrarLetra=function(letra,posicion){
    letra = recuperarTexto("txtLetra")
    let pal2,p1=0,p2=0,p3=0,p4=0,p5=0,pa;
    for (let i = 0; i < palabraSecreta.length; i++) {
        pal2 = palabraSecreta.charAt(i);
        if (letra==pal2 && i==0) {
            mostrarTexto("div0",letra);
        }else if (pal2==letra && i==1) {
            mostrarTexto("div1",letra)
        }else if (pal2==letra && i==2) {
            mostrarTexto("div2",letra)
        }else if (pal2==letra && i==3) {
            mostrarTexto("div3",letra)
        }else if (pal2==letra && i==4) {
            mostrarTexto("div4",letra)
        }
    }
}