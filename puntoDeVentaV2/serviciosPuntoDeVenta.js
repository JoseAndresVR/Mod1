calcularValorDescuento = function(monto,porcentajeDescuento){
    return (monto*porcentajeDescuento)/100;
}

calcularIVA = function(montoSinIVA){
    return (montoSinIVA*12)/100;
}
calcularSubTotal = function(precio,cantidad){
    return precio*cantidad;
}

calcularTotal = function(subtotal,descuento,iva){
    return (subtotal-descuento)+iva;
}

calcularDescuentoPorVolumen = function(subtotal,cantidad){
    if (cantidad<3) {
        return subtotal;
    }else if(cantidad>=3 || cantidad<=5){
        return 0.03 *subtotal;
    }else if(cantidad>=6 || cantidad<=11){
        return 0.04 *subtotal;
    }else{
        return 0.05 *subtotal;
    }
}
