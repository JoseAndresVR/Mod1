let clientes=[
    {cedula:"123213",nombre:"Juan",edad:20},{cedula:"222222",nombre:"Mario",edad:50},{cedula:"333333",nombre:"Pepe",edad:22}
];


guardarCambios = function () {
    let ci=recuperarTexto("txtCedula"),nombre=recuperarTexto("txtNombre"),edad=recuperarFlotante("txtEdad"),nuevoCliente={};
    nuevoCliente.cedula=ci;
    nuevoCliente.nombre=nombre;
    nuevoCliente.edad=edad;
    modificarCliente(nuevoCliente);
    mostrarClientes();
}

modificarCliente = function (clienteM) {
    let Cl=buscarCliente(clienteM.cedula);
    if (Cl!=null) {
        Cl.nombre=clienteM.nombre;
        Cl.edad=clienteM.edad;
    }
}

ejecutarBusqueda = function () {
    let vlci=recuperarTexto("txtCedula2"),respuesta=buscarCliente(vlci);
    if (respuesta==null) {
        alert("cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);

    }

}

crearCliente = function(){
    let ci=recuperarTexto("txtCedula"),nombre=recuperarTexto("txtNombre"),edad=recuperarFlotante("txtEdad"),nuevoCliente={};
    nuevoCliente.cedula=ci;
    nuevoCliente.nombre=nombre;
    nuevoCliente.edad=edad;
    agregarCliente(nuevoCliente);
}

buscarCliente = function (ci) {
    let elementoCliente,clienteEncontrado=null;       

    for (let i = 0; i < clientes.length; i++) {
        elementoCliente=clientes[i];
        if (elementoCliente.cedula==ci) {
            clienteEncontrado=elementoCliente;
            break;
        }       


    }
    return clienteEncontrado;
}



agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
    }else{
        alert("Ya existe");
    }
}






mostrarClientes = function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+"<th>NOMBRE</th>"+"<th>EDAD</th>"+"</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){elementoCliente=clientes[i];contenidoTabla+=
    "<tr><td>"+elementoCliente.cedula+"</td>"+"<td>"+elementoCliente.nombre+"</td>"+"<td>"+elementoCliente.edad+"</td>"+"</tr>"
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
    }
}

