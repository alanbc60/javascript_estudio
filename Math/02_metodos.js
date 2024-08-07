// Métodos del Objeto Math
// Math.abs(x): Devuelve el valor absoluto de x.
console.log(Math.abs(-7.25)); // 7.25

// Math.ceil(x): Redondea x hacia arriba al entero más próximo.
console.log(Math.ceil(7.25)); // 8

// Math.floor(x): Redondea x hacia abajo al entero más próximo.
console.log(Math.floor(7.25)); // 7

// Math.round(x): Redondea x al entero más próximo.
console.log(Math.round(7.25)); // 7
console.log(Math.round(7.75)); // 8

// Math.max(...values): Devuelve el mayor de los valores dados.
console.log(Math.max(3, 5, 7, 2)); // 7

// Math.min(...values): Devuelve el menor de los valores dados.
console.log(Math.min(3, 5, 7, 2)); // 2

// Math.pow(base, exponent): Devuelve la base elevada al exponente.
console.log(Math.pow(2, 3)); // 8

// Math.sqrt(x): Devuelve la raíz cuadrada de x.
console.log(Math.sqrt(16)); // 4

// Math.random(): Devuelve un número pseudo-aleatorio entre 0 (inclusive) y 1 (exclusive).
console.log(Math.random()); // Ejemplo: 0.7244323106906535

//* si math.random se combina con math.floor se obtiene un número entre 0 y n-1 multiplicando por n
console.log(Math.floor(Math.random() * 10));


// Math.trunc(x): Devuelve la parte entera de x, eliminando cualquier dígito fraccional.
console.log(Math.trunc(4.9)); // 4

// Math.sign(x): Devuelve el signo de x, indicando si el número es positivo, negativo o cero.
console.log(Math.sign(7)); // 1
console.log(Math.sign(-7)); // -1
console.log(Math.sign(0)); // 0


// Funciones Trigonométricas:
// Math.sin(x): Devuelve el seno de x (en radianes).
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos(x): Devuelve el coseno de x (en radianes).
console.log(Math.cos(0)); // 1

// Math.tan(x): Devuelve la tangente de x (en radianes).
console.log(Math.tan(Math.PI / 4)); // 1

// Funciones Logarítmicas y Exponenciales:
// Math.log(x): Devuelve el logaritmo natural (base E) de x.
console.log(Math.log(Math.E)); // 1

// Math.exp(x): Devuelve E elevado a la potencia de x.
console.log(Math.exp(1)); // 2.718281828459045

// Para convertir grados a radianes:

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
console.log(degreesToRadians(180)); // 3.141592653589793
// Para convertir radianes a grados:

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}
console.log(radiansToDegrees(Math.PI)); // 180