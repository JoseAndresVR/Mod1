let estudiantes = [
    {nombre:"Edwin",apellido:"Erazo",nota1:8.4,nota2:9.5,nota3:8.7,total:26.6,promedio:8.7},
    {nombre:"Maritza",apellido:"Rosero",nota1:5.4,nota2:8.5,nota3:9.7,total:23.6,promedio:9.7},
    {nombre:"Esteban",apellido:"Guaranda",nota1:9.4,nota2:10.0,nota3:9.0,total:28.4,promedio:9.0},
    {nombre:"Ricardo",apellido:"Batista",nota1:6.4,nota2:9.5,nota3:8.9,total:24.8,promedio:8.9}
]

calcularTotal = function (n1,n2,n3) {
    return n1+n2+n3;
}

calcularPromedio=function (p1,p2,p3) {
    return (p1+p2+p3)/3;
}

calcular = function () {
    let n1=recuperarFloat("txtNota1"),n2=recuperarFloat("txtNota2"),n3=recuperarFloat("txtNota3"), total=calcularTotal(n1,n2,n3),promedio=calcularPromedio(n1,n2,n3);
    mostrarTexto("lblTotal","TOTAL: "+total);
    mostrarTexto("lblPromedio","PROMEDIO: "+promedio);
    habilitarComponente("guardar");

}

guardar = function () {
    let nota1=recuperarFloat("txtNota1"),nota2=recuperarFloat("txtNota2"),nota3=recuperarFloat("txtNota3"),nombre=recuperarTexto("txtNombre"),apellido=recuperarTexto("txtApellido"),estudiante={}
    estudiante.nombre=nombre;
    estudiante.apellido=apellido;
    estudiante.nota1=nota1;
    estudiante.nota2=nota2;
    estudiante.nota3=nota3;
    let total=calcularTotal(nota1,nota2,nota3),promedio=calcularPromedio(nota1,nota2,nota3);
    estudiante.total=total;
    estudiante.promedio=promedio;
    estudiantes.push(estudiante);
    mostrarPersonas();
    alert("Notas Guardadas con exito");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtNota1","");
    mostrarTextoEnCaja("txtNota2","");
    mostrarTextoEnCaja("txtNota3","");
    mostrarTexto("lblTotal","");
    mostrarTexto("lblPromedio","");
    deshabilitarComponente("guardar");

}


mostrarPersonas = function () {
    let tablaPersonas = "<table><tr><th>NOMBRE</th><th>APELLIDO</th><th>NOTA 1</th><th>NOTA 2</th><th>NOTA 3</th><th>TOTAL</th><th>PROMEDIO</th></tr>",datosEstudiante;
    let tabla = document.getElementById("tablaDiv");
    for (let i = 0; i < estudiantes.length; i++) {
        datosEstudiante=estudiantes[i];
        tablaPersonas += "<tr><th>"+datosEstudiante.nombre+"</th><th>"+datosEstudiante.apellido+"</th><th>"+datosEstudiante.nota1+"</th><th>"+datosEstudiante.nota2+"</th><th>"+datosEstudiante.nota3+"</th><th>"+datosEstudiante.total+"</th><th>"+datosEstudiante.promedio+"</th></tr>";
        // tablaPersonas+="<tr><td>"+valorPersonas.nombre+"</td><td>"+valorPersonas.apellido+"</td></tr>";
    }
    tablaPersonas+="</table>";
    tabla.innerHTML = tablaPersonas;
    deshabilitarComponente("guardar");
}

