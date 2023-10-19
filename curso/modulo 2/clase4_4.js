let operador = " ";
let resultado = 0;
let num1 = 0;
let num2 = 0;

num1 = 6;
num2 = 3;
operador = "+";

switch (operador){
    case "+":
        console.log("El resulta de sumar: "+num1+" + "+num2+" es "+(num1+num2));
        break;
    case "-":
        console.log("El resulta de restar: "+num1+" - "+num2+" es "+(num1-num2));
         break;
    case "/":
        console.log("El resulta de dividir: "+num1+" / "+num2+" es "+(num1/num2));
        break;
    case "*":
        console.log("El resulta de multiplicar: "+num1+" * "+num2+" es "+(num1*num2));
        break;
    default: 
        console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir");
}