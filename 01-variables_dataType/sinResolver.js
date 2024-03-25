

// =========== Ejercicio 1 ================
// Connect the `firstName` and `lastName` to construct the variable `fullName`, but with a space (`" "`) in between the first and last name.
// Multiply the variable `myNumber` by 2 and put the result in `meaningOfLife`.

const firstName = "Donaji ";
const lastName = "Coello";
const fullName = firstName + lastName; //tambien se puede poner el espacio + " " +
console.log(fullName);


//  ============================ Ejercicio 2  =========================
// Declare dos variables: administrador y nombre. Asigne el valor "John" al nombre. Copie el valor del nombre al administrador. Muestre el valor de administrador usando alerta (debe generar "John").


const nombre = "John";
const administrador = nombre;
console.log(administrador);


//  ============================ Ejercicio 3  =========================

// TODO: Ejercicios de tipos de datos
// Ejercicio 3.1
console.log(typeof(15));
// Prediction: number
// Actual: 

// Ejercicio 3.2
console.log(typeof(5.5));
// Prediction: number
// Actual: 

// Ejercicio 3.3
console.log(typeof(NaN));
// Prediction: NaNn:( 
// Actual: correcto es number

// Ejercicio 3.4
console.log(typeof("hello"));
// Prediction: string
// Actual: 

// Ejercicio 3.5
console.log(typeof(true));
// Prediction: boolean
// Actual: 

// Ejercicio 3.6
console.log(typeof(1 != 2));
// Prediction: boolean
// Actual: 

// Ejercicio 3.7
console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual:
// Ejercicio 3.8
console.log("hamburgers" - "s");
// Prediction: NaN
// Actual: 

// Ejercicio 3.9
console.log("1" + "3");
// Prediction: 13
// Actual: 

// Ejercicio 3.10
console.log("1" - "3");
// Prediction: -2 
// Actual: 

// Ejercicio 3.11
console.log("johnny" + 5);
// Prediction: johny5
// Actual: 

// Ejercicio 3.12
console.log("johnny" - 5);
// Prediction: NaN
// Actual: 

// Ejercicio 3.13
console.log(99 * "luftbaloons");
// Prediction: lufbaloons *99
// Actual: 

// Ejercicio de simbolo

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);
// Prediction: false 
//El tipo de dato symbol es único y detergente


// =================== Ejercicio 4 ================


// Ejercicio: Declara una variable con un número, una cadena y un valor booleano. Luego, convierte cada uno a otro tipo de dato

const num = 11;
const string = "hello";
const boolean = true;


//conversion 


// convertir un numero a un string

const numeroString = num.toString();
const numeroString2 = String(num);


// convertir un string a un numero 

const stringNumero = parseInt(string); //NaN
const stringNumero2 = Number(string);


// Convierte el valor booleano a un número (1 si es true, 0 si es false) 

const booleanNumber = Number(boolean);

//Convierte el número a un valor booleano (true si es diferente de cero, false si es cero

const numberBoolean = Boolean(num);

// Convierte la cadena a un valor booleano (true si la cadena no está vacía, false si está vacía)

const cadenaBoolean = string !== ""; //si el string  esta vacia es false
console.log(cadenaBoolean);
const cadenaBoolean2 = string === " "; //si el string No esta vacia es true

const cadena = Boolean(string);


// typeof (3/Infinity) :D

// typeof undefined  :D


// typeof null :D

// ¿Qué devuelve la siguiente expresión? NaN === NaN; false :)

// ¿Qué devuelve la siguiente expresión? let y; y === "cool";  false 


// ¿Qué devuelve la siguiente expresión? let sport; sport === undefined; true


'Shakira' === "Shakira"; //true    