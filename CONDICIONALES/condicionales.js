calcularTasaIntereses=function(inA){
if (inA<300000) {
    let ts=0.16;
    return ts;
}else if(inA>=300000 && inA<500000){
    let ts=0.15;
    return ts;
}else if(inA>=500000 && inA<1000000){
    let ts=0.14;
    return ts;
}else if(inA>=1000000 && inA<2000000){
    let ts=0.13;
    return ts;
}else{
    let ts=0.12;
    return ts;
}
}

calcularCapacidadPago = function(edad,ingresos,egresos){
    let cuotaM,cp;
    if (edad>50) {
        cp =(egresos-ingresos);
        cuotaM = cp*0.3;
        return cuotaM;
    }else{
        cp =(egresos-ingresos);
        cuotaM = cp*0.4;
        return cuotaM;
    }
}

calcularDescuento = function (precio,cantidad) {
    if (cantidad<3) {
       return precio;
    }else if(cantidad>=3 || cantidad<=5){
       return precio = precio-(precio*0.02);
    }else if(cantidad>=6 || cantidad<=11){
       return precio = precio-(precio*0.03);
    }else{
       return precio = precio-(precio*0.04);
    }
}

determinarColesterolLDL = function(nivelColesterol){
    if (nivelColesterol<100) {
        console.log("Nivel Optimo");
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        console.log("Nivel Casi optimo");
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        console.log("Nivel Limite superior del rango normal");
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        console.log("Nivel Alto");
    }else{
        console.log("Nivel Muy Alto");
    }
}

validarClave = function(clave){
    if (clave.length>=8 || clave.length<=16) {
        return true;
    }else{
        return false;
    }
}

esMayuscula = function(caracter){
    
    if(caracter.charCodeAt >= 65 || caracter.charCodeAt<=90){
        return true;
    } else{
        return false;
    }
}

esMinuscula = function(caracter){
    if((caracter.charCodeAt >= 97 || caracter.charCodeAt<=122)||(caracter.charCodeAt == 225|| caracter.charCodeAt == 233 || caracter.charCodeAt == 237 || caracter.charCodeAt == 243 || caracter.charCodeAt == 250 || caracter.charCodeAt == 252 || caracter.charCodeAt == 241)){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    if(caracter.charCodeAt >= 32 || caracter.charCodeAt<=255){
        return true;
    } else{
        return false;
    }
}

darPermiso = function(notaMatematica,notaFisica,notaGeometrica){
    if (notaMatematica > 90 || notaGeometrica>90 || notaFisica>90) {
        return true;
    }else{
        return false;
    }
}

otorgarPermiso = function(notaMatematica,notaFisica,notaGeometrica){
    if ((notaMatematica > 90 || notaFisica>90) && notaGeometrica>80) {
        return true;
    }else{
        return false;
    }
}

dejarSalir = function(notaMatematica,notaFisica,notaGeometrica){
    if ((notaMatematica > 90 || notaGeometrica>90 || notaFisica>90) && notaFisica>notaMatematica) {
        return true;
    }else{
        return false;
    }
}