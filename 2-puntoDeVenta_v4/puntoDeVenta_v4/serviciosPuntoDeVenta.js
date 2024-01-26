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
