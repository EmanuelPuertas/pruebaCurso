function totalHamburguesa ( tipoDeHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let precioTipoDeHamburguesa = 0;
    switch (tipoDeHamburguesa) { //para ver que tipo de hamburguesa es
        case "carne a la parrilla":
            precioTipoDeHamburguesa = 1800;
          break;
        case "pollo":
            precioTipoDeHamburguesa = 1500;
          break;
        case "vegetariana":
            precioTipoDeHamburguesa = 1200;
          break;
        default:
            return "ERROR TIPO DE HAMBURGUESA";  
      }

      let totalAdicionales = 0;
      if(jamon){
        totalAdicionales = totalAdicionales + 30;
      }
      if(queso){
        totalAdicionales = totalAdicionales + 25;
      }
      if(salsaTomate){
        totalAdicionales = totalAdicionales + 5;
      }
      if(mayonesa){
        totalAdicionales = totalAdicionales + 5;
      }
      if(mostaza){
        totalAdicionales = totalAdicionales + 5;
      }
      if(tomate){
        totalAdicionales = totalAdicionales + 15;
      }
      if(lechuga){
        totalAdicionales = totalAdicionales + 10;
      }
      if(cebolla){
        totalAdicionales = totalAdicionales + 10;
      }
      return precioTipoDeHamburguesa + totalAdicionales;
      //return console.log("total a pagar $"+(precioTipoDeHamburguesa+totalAdicionales));


}

function mensajeUsuario(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let total = totalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    return console.log("Estimado "+nombre +" "+apellido +", el monto total a pagar es de: $"+total);
}

let jamon = true;
let queso = false;
let salsaTomate = false;
let mayonesa = false;
let mostaza = false;
let tomate = false;
let lechuga = false;
let cebolla = false;

mensajeUsuario("Emanuel ","Puertas ","carne a la parrilla",jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla);