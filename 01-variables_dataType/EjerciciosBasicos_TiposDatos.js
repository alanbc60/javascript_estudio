

// =========== Ejercicio 1 ================
// Connect the `firstName` and `lastName` to construct the variable `fullName`, but with a space (`" "`) in between the first and last name.
// Multiply the variable `myNumber` by 2 and put the result in `meaningOfLife`.

const firstName = "Emit";
const lastName = "Nutriales";
const myNumber = 21;

const fullName = firstName + " " + lastName;
const meaningOfLife = myNumber * 2;



//  ============================ Ejercicio 2  =========================
// Declare dos variables: administrador y nombre. Asigne el valor "John" al nombre. Copie el valor del nombre al administrador. Muestre el valor de administrador usando alerta (debe generar "John").

const nombre = "John";
const admin = nombre;
console.log("debe generar " + admin);


//  ============================ Ejercicio 3  =========================

// TODO: Ejercicios de tipos de datos
// Ejercicio 3.1
console.log(typeof(15));
// Resultado: number

// Ejercicio 3.2
console.log(typeof(5.5));
// Resultado: number


// Ejercicio 3.3
console.log(typeof(NaN));
// Resultado: number


// Ejercicio 3.4
console.log(typeof("hello"));
// Resultado: string

// Ejercicio 3.5
console.log(typeof(true));
// Resultado: boolean


// Ejercicio 3.6
console.log(typeof(1 != 2));
// Resultado: boolean


// Ejercicio 3.7
console.log("hamburger" + "s");
// Resultado: hamburgers

// Ejercicio 3.8
console.log("hamburgers" - "s");
// El simbolo "+" en los String sirve de concatenacion, mientras que el simbolo "-" no. Hace una operacion aritmetica
// Prediction: NaN
// Actual: 

// Ejercicio 3.9

console.log("Ejercicio 3.9");
console.log("1" + 3);
console.log(typeof("1")); // string

// Como "1" es un string, se concatena con 3 (aunque sea numero), 
// Prediction: 13
// Actual: 

// Ejercicio 3.10
console.log("Ejercicio 3.10");
// Lo que pasa aqui es que trata de hacer la operacion resta, primero verifica el String y trata de convertir a tipo number.
// Si en el String encuentra una letra entonces arrojará un NaN
console.log("1AF" - 3);
console.log("1" - "3");
// Resultado: -2

console.log("Ejercicio 3.11");
console.log("1a" - "3");
// Resultado: NaN;

// Ejercicio 3.12
console.log("johnny" + 5);
// Resultado: johnny5
// Actual: 

// Ejercicio 3.13
console.log("johnny" - 5);
// Prediction: NaN
// Actual: 

// Ejercicio 3.14
console.log(99 * "luftbaloons");
// Prediction: NaN
// Actual: 


// Ejercicio de simbolo (Ejercicio 3.15)

let sym1 = Symbol("id"); 
let sym2 = Symbol("id");
console.log(sym1 === sym2);
// Prediction: false
// Actual: 


// =================== Ejercicio 4 ================

// Ejercicio: Declara una variable con un número, una cadena y un valor booleano. Luego, convierte cada uno a
// otro tipo de dato

const num = 11;
const string = "hello";
const boolean = true;

//conversion 
const booleanString = boolean.toString();
console.log(booleanString);

// convertir un numero a un string

const numString = num.toString();
console.log(numString);

// convertir un string a un numero 

// const stringNum = parseInt(string);
const stringNum = Number(string);

console.log(stringNum);

// Convierte el valor booleano a un número (1 si es true, 0 si es false) 

const booleanNum =  Number(boolean); 
console.log(booleanNum);

//Convierte el número a un valor booleano (true si es diferente de cero, false si es cero

const numberBoolean =  Boolean(num); 
console.log(numberBoolean);

// Convierte la cadena a un valor booleano (true si la cadena no está vacía, false si está vacía)

const stringBoolean =  Boolean(string); 
console.log(stringBoolean);


// =================== Ejercicio 5 ================
typeof (3/Infinity)
// res: number

typeof undefined
// res: undefined

typeof null
// res Object

// ¿Qué devuelve la siguiente expresión? NaN === NaN;
// res false
 
// ¿Qué devuelve la siguiente expresión? let y; y === "cool";
// res: false

// ¿Qué devuelve la siguiente expresión? let sport; sport === undefined
// res: true


'Shakira' === "Shakira";
// res: true