cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas=function(){
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */

    let tablaCuentas = "<table><tr><th>CUENTA</th><th>NOMBRE</th><th>SALDO</th></tr>";
    for (let i = 0; i <cuentas.length; i++) {
        tablaCuentas += "<tr><td>"+cuentas[i].numeroCuenta+"</td><td>"+cuentas[i].nombre+" "+cuentas[i].apellido+"</td><td>"+cuentas[i].saldo+"</td></tr>";
    }
    tablaCuentas += "</table>";
    mostrarTabla("inferior",tablaCuentas);

}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numCuenta){
    for(let i =0 ; i<cuentas.length;i++){
        if (numCuenta==cuentas[i].numeroCuenta) {
            return cuentas[i];
        }
    }
    return null;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    if (buscarCuenta(cuenta.numeroCuenta)==null) {
        alert("Cuenta agregada exitosamente");
        cuentas.push(cuenta);

    }else{
        alert("Cuenta Existente");

    }
}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let cuentaN=recuperarTexto("caja1"),nombreN=recuperarTexto("caja2"),apellidoN=recuperarTexto("caja4"),cedulaN=recuperarTexto("caja3"),saldoN=0;
    let cuentaNueva={};
    cuentaNueva.nombre = nombreN;
    cuentaNueva.numeroCuenta = cuentaN;
    cuentaNueva.apellido = apellidoN;
    cuentaNueva.cedula = cedulaN;
    cuentaNueva.saldo=saldoN;
    agregarCuenta(cuentaNueva);
    mostrarCuentas();



}
