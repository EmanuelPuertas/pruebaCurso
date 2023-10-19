//const colores = require("./pruebaClase9");

//console.log(colores );

//file system

 const fsa = require ("fs");

 let existe = fsa.readFileSync("pruebaClase9.js","utf8");
 console.log(existe)