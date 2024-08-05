// ========= Declaración de String ========

//* 1. comillas simples
let nombre = 'Alan';
console.log('Hola ' + nombre);

//* 2. comillas dobles
let nombre2 = "Alan";
console.log('Hola ' + nombre2);

//* 3. Templates literales
// Introducidos en ECMAScript 6 (ES6), los template literals utilizan comillas invertidas (`) y 
// permiten interpolación de variables y expresiones mediante ${}.

let name = "Mundo";
let templateLiteralString = `Hola, ${name}`;
console.log(templateLiteralString);  // Output: Hola, Mundo

// podemos declarar un string multilinea con templates literales:

let multiLineString = `Esta es una cadena
que se extiende en
múltiples líneas.`;
console.log(multiLineString);
// Output:
// Esta es una cadena
// que se extiende en
// múltiples líneas.


//* 4. String constructor
let name2 = new String("Mundo");
console.log(name2);



