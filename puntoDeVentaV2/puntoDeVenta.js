calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let validacion1=false,validacion2=false,validacion3=false;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    //2. Recuperar el precio como float
    //3. Recuperar cantidad como int
    //4. Recuperar el porcentaje de descuento como int

    nombreProducto=recuperarTexto("txtProducto");
    precioProducto=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");


    esProductovalido=function(){
        if (nombreProducto.length>10 || nombreProducto==""){
            mostrarTexto("lblError1","Ingresa un nombre valido");
            mostrarTextoEnCaja("txtProducto","");
        }else{
            mostrarTexto("lblError1","");
            validacion1 = true;
        }
    }
    
    esCantidadvalida = function(){
        if (cantidad<0 || cantidad >100 || isNaN(cantidad)==true){
            mostrarTexto("lblError2","Ingresa una cantidad valida");
            mostrarTextoEnCaja("txtCantidad","");
        }else{
            mostrarTexto("lblError2","");
            validacion2 = true;
        }
    }
    
    esPreciovalido = function(){
        if (precioProducto<0 || precioProducto>50 || isNaN(precioProducto)==true){
            mostrarTexto("lblError3","Ingresa un precio valido");
            mostrarTextoEnCaja("txtPrecio","");
        }else{
            mostrarTexto("lblError3","");
            validacion3 = true;
        }
    }

    esProductovalido();
    esCantidadvalida();
    esPreciovalido();

    if (validacion1==true && validacion2==true && validacion3==true) {

        valorSubtotal = calcularSubTotal(precioProducto,cantidad);

    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */

    mostrarTexto("lblSubtotal","Subtotal: "+valorSubtotal);
        
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento

    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblDescuento","Descuento: "+valorDescuento);

    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento

    valorIVA=calcularIVA((valorSubtotal-valorDescuento));

    //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */

    mostrarTexto("lblValorIVA","IVA 12%: "+valorIVA);
            
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
    mostrarTexto("lblTotal","Total: "+valorTotal);       
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */



    }

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.

    
}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTexto("lblValorIVA","IVA 12%: 0.0");
    mostrarTexto("lblTotal","Total: 0.0");       
    mostrarTexto("lblDescuento","Descuento: 0.0");
    mostrarTexto("lblSubtotal","Subtotal: 0.0");

    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad","");       
    mostrarTextoEnCaja("txtPrecio","");

    mostrarTexto("lblError1","");
    mostrarTexto("lblError2","");
    mostrarTexto("lblError3","");


    
}
/* SI TODO FUNCIONA, HACER UN PUSH */