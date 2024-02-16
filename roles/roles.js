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

buscarEmpleado = function (cedula) {
    let empleadoEncontrado;
    for (let i = 0; i < empleados.length; i++) {
        empleadoEncontrado = empleados[i];
        if (empleadoEncontrado.cedula==cedula) {
            return empleadoEncontrado;
            break;
        }else{
            return null;
            break;
        }
    }
}

agregarEmpleado = function (empleadoNuevo) {
    let resultado=buscarEmpleado(empleadoNuevo.cedula);
    if(resultado==null){
        empleados.push(empleadoNuevo);
        return true;
    }else{
        return false;
    }

}

guardar = function () {
    let ci=recuperarTexto("txtCedula"),nombre=recuperarTexto("txtNombre"),apellido=recuperarTexto("txtApellido"),sueldo=recuperarFloat("txtSueldo"),nuevoEmpleado={};
    let ap,a1=0,a2=false,su=false,ced,c1=0,c2=false,nom,n1=0,n2=false;
    if (ci.length==10) {
        for (let i = 0; i < ci.length; i++) {
            ced = ci.charAt(i);
            if (esDigito(ced)) {
                c1++;
            }else{
                break;
            }
            
        }
        if (c1==ci.length) {
            c2=true;
            mostrarTexto("lblErrorCedula","");

        }else{
            mostrarTexto("lblErrorCedula","La cedula ingresada debe estar conformada de digitos");
        }
    }else{
        mostrarTexto("lblErrorCedula","La cedula ingresada debe tener exactamente 10 caracteres");
    }
// NOMBRE //////////////////////////////////////////////////////////////////////////////////////////////
    if (nombre.length>=3) {
        for (let i = 0; i < nombre.length; i++) {
            nom = nombre.charAt(i);
            if (esMayuscula(nom)) {
                n1++;
            }else{
                break;
            }
            
        }
        if (n1==nombre.length) {
            n2=true;
            mostrarTexto("lblErrorNombre","");
        }else{
            mostrarTexto("lblErrorNombre","El nombre ingresado debe ser solo letras Mayusculas");

        }
    }else{
        mostrarTexto("lblErrorNombre","El nombre ingresado debe ser superior a 3 caracteres");
    }
// APELLIDO///////////////////////////////////////////////////////////////////////////////////////////////
    if (apellido.length>=3) {
        for (let i = 0; i < apellido.length; i++) {
            ap = apellido.charAt(i);
            if (esMayuscula(ap)) {
                a1++;
            }else{
                break;
            }
        }
        if (a1==apellido.length) {
            a2=true;
            mostrarTexto("lblErrorApellido","");

        }else{
            mostrarTexto("lblErrorApellido","El apellido ingresado debe ser solo letras Mayusculas");
        }
    }else{
        mostrarTexto("lblErrorApellido","El apellido ingresado debe ser superior a 3 caracteres");
    }
// SUELDO//////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    if (sueldo >= 400.00 && sueldo<=5000) {
        su=true;
        mostrarTexto("lblErrorSueldo","");
    }else{
        mostrarTexto("lblErrorSueldo","El sueldo ingresado es erroneo");
    }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (c2==true && n2==true && a2==true && su==true && esNuevo==true) {
        let empleado = {},rt;
        empleado.cedula=ci;
        empleado.nombre=nombre;
        empleado.apellido=apellido;
        empleado.sueldo=sueldo;
        rt= agregarEmpleado(empleado);
        if (rt==false) {
            alert("Empleado guardado correctamente");
            mostrarEmpleados();
        }else{
            alert("Ya existe un empleado con la cedula: "+empleado.cedula);
        }
    }
}