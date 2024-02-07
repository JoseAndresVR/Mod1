validarEstructura= function(placa){
    if(placa.length==7){
        if (esMayuscula(placa,0)==false) {
            return "El digito 1 no puede ser una letra minuscula";
        }
    
        if (esMayuscula(placa,1)==false) {
            return "El digito 2 no puede ser una letra minuscula";
            
        }
        if (esMayuscula(placa,2)==false) {
            return "El digito 3 no puede ser una letra minuscula";
            
        }
    
        if (esGuion(placa)==false) {
            return "El digito 4  debe ser un guion";

        }
    
        if (esDigito(placa,4)==false) {
            return "El digito 5 es erroneo o inexistente";
        }
    
        if (esDigito(placa,5)==false) {
            return "El digito 6 es erroneo o inexistente";
            
        }

        if (esDigito(placa,6)==false) {
            return "El digito 7 es erroneo o inexistente";
        }

        return null;
    
            
            
            
        }else if (placa.length==8) {
            if (esMayuscula(placa,0)==false) {
                return "El digito 1 no puede ser una letra minuscula";
            }
        
            if (esMayuscula(placa,1)==false) {
                return "El digito 2 no puede ser una letra minuscula";
                
            }
            if (esMayuscula(placa,2)==false) {
                return "El digito 3 no puede ser una letra minuscula";
                
            }
        
            if (esGuion(placa)==false) {
                return "El digito 4  debe ser un guion";
    
            }
        
            if (esDigito(placa,4)==false) {
                return "El digito 5 es erroneo o inexistente";
            }
        
            if (esDigito(placa,5)==false) {
                return "El digito 6 es erroneo o inexistente";
                
            }
    
            if (esDigito(placa,6)==false) {
                return "El digito 7 es erroneo o inexistente";
                
            }
            if (esDigito(placa,7)==false) {
                return "El digito 8 es erroneo o inexistente";
                
            }
            return null;
        }else{
            return "Tus digitos estan vacios o incorrectos, intentalo de nuevo";
        }



    }

obtenerProvincia = function(placa){
    if (placa.charAt(0)=="A") {
        return "Azuay";
    }else if (placa.charAt(0)=="B") {
        return " Bolívar ";
    } else if (placa.charAt(0)=="C") {
        return " Carchi ";
    }  else if (placa.charAt(0)=="E") {
        return " Esmeraldas ";
    }  else if (placa.charAt(0)=="G") {
        return " Guayas ";
    }  else if (placa.charAt(0)=="H") {
        return " Chimborazo ";
    }  else if (placa.charAt(0)=="I") {
        return " Imbabura ";
    }  else if (placa.charAt(0)=="K") {
        return " Sucumbíos ";
    }  else if (placa.charAt(0)=="L") {
        return " Loja ";
    }  else if (placa.charAt(0)=="M") {
        return " Manabí ";
    }  else if (placa.charAt(0)=="N") {
        return " Napo ";
    }  else if (placa.charAt(0)=="O") {
        return " El Oro ";
    }  else if (placa.charAt(0)=="P") {
        return " Pichincha ";
    }  else if (placa.charAt(0)=="Q") {
        return " Orellana ";
    }  else if (placa.charAt(0)=="R") {
        return " Los Ríos ";
    }  else if (placa.charAt(0)=="S") {
        return " Pastaza ";
    }  else if (placa.charAt(0)=="T") {
        return " Tungurahua ";
    }  else if (placa.charAt(0)=="U") {
        return " Cañar ";
    }  else if (placa.charAt(0)=="V") {
        return " Morona Santiago ";
    }  else if (placa.charAt(0)=="W") {
        return " Galápagos ";
    } else if (placa.charAt(0)=="X") {
        return " Cotopaxi ";
    }else if (placa.charAt(0)=="Y") {
        return " Santa Elena ";
    }else if (placa.charAt(0)=="Z") {
        return " Zamora Chinchipe ";
    }else {
        return null;   
    }
}


obtenerTipoDeVehiculo = function(placa){
    if (placa.charAt(1)=="A"||placa.charAt(1)=="Z") {
        return " Vehiculo Comercial ";
    } else if (placa.charAt(1)=="E") {
        return " Vehiculo Gubernamental ";
    }else if (placa.charAt(1)=="X") {
        return " Vehiculo de uso oficial ";
    }else if (placa.charAt(1)=="S") {
        return " Vehiculo del gobierno provincial ";
    }else if (placa.charAt(1)=="M") {
        return " Vehiculo Municipal ";
    }else if (placa.charAt(1)!="A" && placa.charAt(1)!="Z"  && placa.charAt(1)!="E"  && placa.charAt(1)!="X"  && placa.charAt(1)!="S"  && placa.charAt(1)!="M" ) {
        return " Vehiculo Particular ";
    }
    else {
        return null;   
    }
}

obtenerDiaPicoYPlaca = function(placa){
    let placaNm=placa.length-1;
    if (placaNm==1||placaNm==2) {
        return " LUNES ";
    } else if (placaNm==3||placaNm==4){
        return " MARTES ";
    }else if (placaNm==5||placaNm==6){
        return " MIERCOLES ";
    }else if (placaNm==7||placaNm==8) {
        return " JUEVES ";
    }else if (placaNm==9||placaNm==0) {
        return " VIERNES ";
    }

}
