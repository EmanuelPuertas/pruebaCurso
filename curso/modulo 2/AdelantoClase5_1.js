function alquilerDeVehiculos (tipoDeVehiculo, diasDeAlquiler, sillaBebe){
    let totalPagar = ( tipoDeVehiculo * diasDeAlquiler ) + sillaBebe;
    let imprimeTipoDeVehiculo;
    switch (tipoDeVehiculo) { //para ver que tipo de vehiculo es
        case 14000:
            imprimeTipoDeVehiculo = "compacto";
          break;
        case 17000:
            imprimeTipoDeVehiculo = "mediano";
          break;
        case 28000:
            imprimeTipoDeVehiculo = "camioneta";
          break;
      }
      if(sillaBebe){
        return console.log("Estimado cliente: en base al tipo de vehículo "+imprimeTipoDeVehiculo +" alquilado, considerando los "+diasDeAlquiler +" días utilizados, el monto total INCLUIDO CON LA SILLA DE BEBE  a pagar es de $"+totalPagar);
      }else{
        return console.log("Estimado cliente: en base al tipo de vehículo "+imprimeTipoDeVehiculo +" alquilado, considerando los "+diasDeAlquiler +" días utilizados, el monto totala pagar es de $"+totalPagar);
      }
    
    
}

let compacto = 14000;
let mediano = 17000;
let camioneta = 28000;
let precioSillaParaBebe = 1200;

let diasDeAlquiler = 3 ; //cambiar para los dias de alquiler

let quiereSillaBebe = true; //cambiar para sillas de bebe

if(quiereSillaBebe){ //agrega precio silla bebe 
    precioSillaParaBebe = diasDeAlquiler * precioSillaParaBebe; 
}else{
    precioSillaParaBebe = 0;
}

alquilerDeVehiculos(camioneta,diasDeAlquiler,precioSillaParaBebe);