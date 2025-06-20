// Parte A. Calculadora Basica

let num1 = 15.7, num2 = 4.3;

//SUMA
let suma = num1 + num2;
console.log(`El resultado de la suma de los numeros es: ${suma}`);

//RESTA
console.log(`El resultado de la resta de los numeros es: ${num1-num2}`);

//MULTIPLICACIÓN
console.log(`El resultado de la multiplicacion es: ${num1*num2} `);

//DIVISIÓN
console.log(`El resultado de la división es: ${num1/num2} `);


//PARTE B: FUNCIONES MATEMATICAS

//1. Redondear hacia arriba
console.log(Math.ceil(suma));

//2. Redondear hacia abajo
console.log(Math.floor(suma));

//3. Redondear al numero mas cercano
console.log(Math.round(suma));

//4. Calcular raiz cuadrad

console.log(Math.sqrt(suma));

// PARTE C: Conversiones y Validaciones

//1. Convierte el string "25.89" a numero decimal

const string = "25.89";
const string2 = "42";

console.log(Number.parseFloat(string));

//2. Convertir a numero entero

console.log(Number.parseInt(string2));

//3. Verifica si num1 es un numero entero

console.log(Number.isInteger(string));

//4. Muestra num2 con solo 1 decimal

console.log(Number.round(string2));













    