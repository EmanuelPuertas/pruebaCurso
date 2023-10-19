const readline = require('readline');

// Crear una interfaz para leer y escribir en la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar al usuario y capturar su respuesta
rl.question('¿cual es la palabra? ', (palabra) => {
  

switch (palabra) {
    case "perro":
        console.log("dog");
        break;
    case "gato":
        console.log("cat");
        break;
    case "puerta":
        console.log("door");
        break;
    case "ventana":
        console.log("window");
        break;
    case "mesa":
        console.log("table");
        break;
    default:
        console.log("La palabra ingresada es incorrecta.");
        
}
rl.close();// Cerrar la interfaz después de capturar la respuesta
}); 
/*
let palabra = "gato";

switch (palabra) {
    case "perro":
        console.log("dog");
        break;
    case "gato":
        console.log("cat");
        break;
    case "puerta":
        console.log("door");
        break;
    case "ventana":
        console.log("window");
        break;
    case "mesa":
        console.log("table");
        break;
    default:
        console.log("La palabra ingresada es incorrecta.");
        
}
*/
