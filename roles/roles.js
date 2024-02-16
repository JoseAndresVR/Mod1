let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0804514875",nombre:"Jose",apellido:"Valencia",sueldo:1500}
],esNuevo=false;

mostrarOpcionEmpleado = function () {
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarComponente("divEmpleado");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    mostrarComponente("divRol");


}
mostrarOpcionResumen = function () {
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
    mostrarComponente("divResumen");
}

mostrarEmpleados = function () {
    let empleadoL="<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>",empleadoValor;
    for (let i = 0; i < empleados.length; i++) {
        empleadoValor = empleados[i];
        empleadoL+="<tr><td>"+empleadoValor.cedula+"</td><td>"+empleadoValor.nombre+"</td><td>" + empleadoValor.apellido+"</td><td>" +empleadoValor.sueldo +"</td></tr>";
    }
    empleadoL+="</table>";
    mostrarTabla("tablaEmpleados",empleadoL);
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}