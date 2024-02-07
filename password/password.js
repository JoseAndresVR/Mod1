
validarPassword=function(passw){
    let letra,esCorrecta=false,existeMayus=false,existeDigito=false;existeEspecial=false;
    if (passw.length>=8 && passw.length<=16) {
        esCorrecta=true;
    }
    for(let i=0;i<passw.length;i++){
        letra = passw.charAt(i);
        esMayuscula(letra);
        if (esMayuscula(letra)) {
            existeMayus=true ;   
        }
    }
    for(let i=0;i<passw.length;i++){
        letra = passw.charAt(i);
        esDigito(letra);
        if (esDigito(letra)) {
            existeDigito=true;
        }
    }
    
    for(let i=0;i<passw.length;i++){
        letra = passw.charAt(i);
        esEspecial(letra);
        if (esEspecial(letra)) {
            existeEspecial=true;
        }
    }
    
    if (esCorrecta==true&&existeMayus==true&&existeDigito==true&&existeEspecial==true) {
        return "";
    }else{
        return "La clave debe contener al menos un caracter especial, contener al menos un digito, contener al menos una Mayuscula y no ser muy corta o exceder la longitud necesaria";
    }
}

ejecutarValidacion=function(){
    let clave =recuperarTexto("txtClave");
    let clavevi =validarPassword(clave);
    if (clavevi=="") {
        mostrarTexto("lblVali","Contraseña Valida");
    }else{
        mostrarTexto("lblVali",clavevi);
    }
}