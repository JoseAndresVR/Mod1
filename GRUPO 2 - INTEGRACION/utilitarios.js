
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}
recuperarTextDiv=(idComponente)=>{
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.textContent;
    return valorIngresado;
}

recuperarFloatDiv = function(idComponente){
    let valorCaja= recuperarTextDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }
 recuperarIntDiv = function(idComponente){
    let valorCaja= recuperarTextDiv(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
 }
 cambiarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

esNombreValido=function(nombre){
    let nombreValido=false;
    if(nombre.legth>=3){
            mostrarTexto("lblNombreError","");
        return true;
    }else{
    mostrarTexto("lblNombreError","Debe tener al menos 3 caracteres");
    return nombreValido;
    }
}

esApellidoValido=function(apellido){
    let nombreValido=false;
    if(nombre.legth>=3){
            mostrarTexto("lblApellidoError","");
        return true;
    }else{
    mostrarTexto("lblApellidoError","Debe tener al menos 3 caracteres");
    return nombreValido;
    }
}

estaVacia=(idComponente, valor)=>{
    console.log(valor);
    if ( isNaN(valor) || valor=='') {
        mostrarTexto(idComponente,"ESTE CAMPO ES OBLIGATORIO");
        return true;
    }else{
        return false;
    }
}

estaVacia1=(idComponente, valor)=>{
    console.log(valor);
    if ( !isNaN(valor) || valor=='') {
        mostrarTexto(idComponente,"ESTE CAMPO ES OBLIGATORIO");
        return true;
    }else{
        return false;
    }
}


validarNota=(idComponente,nota)=>{
    let hayError=false;
   if (nota<0 || nota>10) {
    hayError=true;
    mostrarTexto(idComponente,"DEBE TENRE UN VALOR ENTRE 0 Y 10");
   }else{
    mostrarTexto(idComponente,"");
   }
   return hayError;
}