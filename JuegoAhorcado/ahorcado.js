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
        console.log(palabraSecreta);
    }else{
        alert ("Debes ingresar 5 letras mayusculas");
    }
    
        
}