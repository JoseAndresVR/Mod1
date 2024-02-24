let personas=[
    {nombre:"Edwin", apellido:"Erazo", nota1:8.4, nota2:9.5,nota3:8.7, total:26.6, promedio:8.7 },
    {nombre:"Maritza", apellido:"Rosero", nota1:5.4, nota2:8.5,nota3:9.7, total:23.6, promedio:9.7 },
    {nombre:"Esteban", apellido:"Guaranda", nota1:9.4, nota2:10.0,nota3:9.0, total:28.4, promedio:9.0 },
    {nombre:"Ricardo", apellido:"Batista", nota1:6.4, nota2:9.5,nota3:8.9, total:24.8, promedio:8.9 }
]

agregarPersona=()=>{
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");
if (!validarNombre(nombre) & !validarEdad(edad)) {
    let nuevaPersona={};
    nuevaPersona.nombre=nombre;
    nuevaPersona.edad=edad;
personas.push(nuevaPersona);
mostrarTabla();
    alert("PERSONA AGREGADA CORRECTAMENTE");
}
}

validarNombre=(nombre)=>{
    let  mensage="";
    let flag=false;
if (!isNaN(nombre) || nombre==null) {
    mensage="CAMPO OBLIGATORIO";
    flag=true;
}

if (nombre.length<3) {
     mensage="DEBE TENER ALMENOS 3 CARACTERES";
    flag=true;

   
} 
mostrarTexto("lblErrorNombre", mensage);
return flag;
}

validarEdad=(edad)=>{
    let mensage="";
    let flag=false;

    if (isNaN(edad) ) {
        mensage="CAMPO OBLIGATORIO";
        flag=true;
    }
if (edad<0 || edad >100 ) {
     mensage="DEBE ser entre 0 y 100";
    flag=true;

   
} 
mostrarTexto("lblErrorEdad", mensage);

return flag;
}


mostrarTabla=()=>{
   let  tabla=document.getElementById("tblPersonas");
    let contenido="<table><tr><th>Nombre</th><th>APELLIDO</th><th>NOTA 1</th></th><th>NOTA 2</th></th><th>NOTA 3</th></th><th>TOTAL</th></th><th>PROMEDIO</th></tr>";
    personas.forEach(persona => {
        contenido+="<tr><td>"+persona.nombre+"</td><td>"+
        persona.apellido+"</td>"+
        "<td>"+persona.nota1+"</td>"+
        "<td>"+persona.nota2+"</td>"+
        "<td>"+persona.nota3+"</td>"+
        "<td>"+persona.total+"</td>"+
        "<td>"+persona.promedio+"</td>"+"</tr>";
    });

    contenido+="</table>";
tabla.innerHTML=contenido;

deshabilitarComponente("btnGuardar");
    
}

encontrarMayor=()=>{
    let personaMayor=personas[0];
    let elementoPersona=null;

    personas.forEach(persona => {
       // elementoPersona=persona;
        if (persona.edad>personaMayor.edad) {
            personaMayor=persona;
        }
    });
return personaMayor;
}
determinarMayor=()=>{
let mayor;
mayor=encontrarMayor();
mostrarTexto("nombreMayor", mayor.nombre);
mostrarTexto("edadMayor", mayor.edad);
}



calcularTotal=(n1,n2,n3)=>{
    let sumaNotas;
   
    sumaNotas=n1+n2+n3;
   
    return Math.round(sumaNotas*100)/100 ;
    }


    calcularPromedio=(n1,n2,n3)=>{
        let sumaNotas;
        let promedio;
        sumaNotas=n1+n2+n3;
        promedio=sumaNotas/3;
        return Math.round(promedio*100)/100 ;
        }


        calcular=()=>{
            let nota1;
            let nota2;
            let nota3;
        
            let promedio;
        let mensage;
        let imagen;
       let  total;
        
            nota1=recuperarFloat("txtNota1");
            nota2=recuperarFloat("txtNota2");
            nota3=recuperarFloat("txtNota3");
        
            promedio=calcularPromedio(nota1,nota2,nota3);
            total=calcularTotal(nota1,nota2,nota3);
            
           cambiarTexto("lblResultadoPromedio", "Su promedio es "+promedio);
            cambiarTexto("lblResultadoTotal", "Total es "+total+" y su promedio es "+promedio);
            habilitarComponente("btnGuardar");
          /*  if (promedio>0 && promedio<5) {
                 mensage="REPROBADO";
                  imagen="reprobada";
            } else  if (promedio>=5 && promedio<=8)  {
                mensage="BUEN TRABAJO";
                imagen="buenTrabajo";
            }else  if (promedio>8 && promedio<=10)  {
                mensage="EXCELENTE";
                imagen="excelenteTrabajo";
            }else{
                mensage="DATOS INCORRECTOS";
                  imagen="incorrecto";
            }
            cambiarTexto("lblMensaje", mensage);
            cambiarImagen("imgResultado","imagenes/"+imagen+".gif");*/
        }


        guardar=()=>{

            let nota1;
            let nota2;
            let nota3;
            let promedio;
            let mensage;
            let imagen;
           let  total;
            
                nota1=recuperarFloat("txtNota1");
                nota2=recuperarFloat("txtNota2");
                nota3=recuperarFloat("txtNota3");
            
                promedio=calcularPromedio(nota1,nota2,nota3);
                total=calcularTotal(nota1,nota2,nota3);

            let nombre=recuperarTexto("txtNombre");
         let apellido=recuperarTexto("txtApellido");
if (!esValidadTexto('lblErrorNombre', nombre) &
 !esValidadTexto('lblErrorApellido', apellido) &
 !validarNota('lblErrorNota1', nota1) &
 !validarNota('lblErrorNota2', nota2) &
 !validarNota('lblErrorNota3', nota3)

 ) {
    let nuevaPersona={};
    nuevaPersona.nombre=nombre;
    nuevaPersona.apellido=apellido;
    nuevaPersona.nota1=nota1; 
    nuevaPersona.nota2=nota2;
    nuevaPersona.nota3=nota3;
     nuevaPersona.total=total; 
     nuevaPersona.promedio=promedio;
personas.push(nuevaPersona);
alert("Notas Guardadas");
mostrarTabla();
deshabilitarComponente("btnGuardar");
limpiar();
}

        
        }


        limpiar=()=>{
            cambiarTexto("txtNombre","");
            cambiarTexto("txtApellido","");
            cambiarTexto("txtNota1","");
            cambiarTexto("txtNota2","");
            cambiarTexto("txtNota3","");
        };