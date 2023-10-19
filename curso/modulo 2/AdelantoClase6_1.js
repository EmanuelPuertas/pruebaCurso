// Paso 2: Define el array de productos
let electrodomesticos = ["Lavadora", "Nevera", "Microondas", "Televisor", "Aspiradora", "Licuadora"];

// Paso 3: Ejecuta las acciones

// Acceder de manera arbitraria a diferentes elementos del array
console.log("Elemento en la posición 2:", electrodomesticos[1]);
console.log("Elemento en la posición 4:", electrodomesticos[3]);

// Extraer el primer elemento del array y agregarlo al final del mismo
let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);

// Agregar al final del array dos nuevos productos
electrodomesticos.push("Cafetera", "Horno");

// Mostrar por la consola la cantidad de elementos que contiene el array
console.log("Cantidad de elementos en el array:", electrodomesticos.length);

// Buscar un elemento del array y mostrar un mensaje según su existencia
let productoBuscado = "Televisor";
if (electrodomesticos.includes(productoBuscado)) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}

// Unificar todos los elementos del array en una cadena de texto
let cadenaTexto = electrodomesticos.join(" ");

// Determinar la cantidad de elementos que posee la cadena de texto
console.log("Cantidad de caracteres en la cadena de texto:", cadenaTexto.length);

// Cambiar el nombre de algún producto de la cadena de texto
cadenaTexto = cadenaTexto.replace("Microondas", "Secadora");

// Con la cadena de texto obtenida, generar un nuevo array con cada palabra separada por coma
let palabrasArray = cadenaTexto.split(" ");

// Mostrar el nuevo array
console.log("Nuevo array de palabras:", palabrasArray);