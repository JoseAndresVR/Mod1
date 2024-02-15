

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
];

mostrarOpcionEmpleado = function () {
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarComponente("divEmpleado");

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
