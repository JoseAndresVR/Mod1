
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

esValidadTexto=(idComponente, valor)=>{

    let hayError=false;
    if (!estaVacia1(idComponente,  valor)) {
        if (valor.length<3) {
            hayError=true;
            mostrarTexto(idComponente,"DEBE TENER AL MENOS 3 CARACTERES");
        } 

        
    }else{
        hayError=true;
    }
    if (hayError==false) {
        mostrarTexto(idComponente,"");
    }
    return hayError;
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
