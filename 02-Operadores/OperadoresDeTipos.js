// typeof: Devuelve una cadena que indica el tipo del operando.
let a = typeof 5;  // "number"


// instanceof: Verifica si un objeto es una instancia de una clase.
let b = [] instanceof Array;  // true
let d = new Date() instanceof Date;  // true

// in: Verifica si una propiedad existe en un objeto.
let c = "x" in { x: 1, y: 2 };  // true


console.log(typeof 37 === "number"); // Salida: true
// Ejemplo 2
console.log(3.14 === Number); // Salida: false

// Explicación: No se puede comparar un Number(Objeto) con un numero primitivo de tipo number, 
//por lo que el resultado de la comparación estricta es false.

// Ejemplo 3
console.log(3.14 == Number); // Salida: False

// Ejemplo 4
console.log(Math.LN2 === Number);

// Ejemplo 5
console.log(typeof Infinity === Number);

// Ejemplo 6
console.log(typeof NaN === Number);

// Ejemplo 7
console.log(typeof Number("1") === Number); // incluye valores que no se pueden convertir en un número

// Ejemplo 8
console.log(typeof Number("shoe") === Number); // incluye valores que no se pueden convertir en un número


console.log("==== Ejemplos string =====");

// Ejemplo 9
console.log(typeof "1" === "string"); 

// Ejemplo 10
// Explicacion: Se esta comparando un string con un objeto de tipo string
console.log(typeof "1" === String); // Resultado: false
