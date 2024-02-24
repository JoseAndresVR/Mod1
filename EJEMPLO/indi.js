let personas=[
    {nombre:"Marcos",edad:18},{nombre:"Roberto",edad:15},{nombre:"Kate",edad:25},{nombre:"Diana",edad:22},{nombre:"Benja",edad:5}
]

agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre"),edad = recuperarInt("txtEdad"),validacion1=false,validacion2=false;
    if (nombre.length>=3) {
        validacion1=true;
    }else{
        mostrarTexto("lblErrorNombre","El nombre ingresado debe contener 3 o mas caracteres");
    }
    if (edad>=0 && edad<=100) {
        validacion2=true;
    }else{
        mostrarTexto("lblErrorEdad","La edad ingresada debe ser un numero entero entre 0 y 100");
    }

    if (validacion1==true && validacion2==true) {
        let nuevaPersona = {};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("Persona Agregada Correctamente")
        mostrarPersonas();
    }
}

mostrarPersonas = function () {
    let tablaPersonas="<table><tr><th>EDAD</th><th>NOMBRE</th></tr>",valorPersonas;
    for (let i = 0; i < personas.length; i++) {
        valorPersonas=personas[i];
        tablaPersonas+="<tr><td>"+valorPersonas.edad+"</td><td>"+valorPersonas.nombre+"</td></tr>";
    }
    tablaPersonas+="</table>";
    mostrarTabla("tablas",tablaPersonas);
}

buscarMayor = function () {
    let personaMayor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        if (personaMayor.edad<personas[i].edad) {
            personaMayor = personas[i];
        }
    }
    console.log(personaMayor);
}