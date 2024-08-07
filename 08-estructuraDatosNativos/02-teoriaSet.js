/*
    Un Set es una colección de valores únicos. Un valor en un Set sólo puede ocurrir una vez; es decir, 
    es único en la colección del Set.

    Características:

    Orden de inserción: Los elementos en un Set se mantienen en orden de inserción.
    Tamaño: La propiedad size devuelve el número de valores en el Set.
    Iteración: Puedes iterar sobre los valores en su orden de inserción.
    Métodos principales:

    add(value): Añade un nuevo valor al Set.
    has(value): Devuelve true si el valor existe en el Set.
    delete(value): Elimina el valor especificado del Set.
    clear(): Elimina todos los valores del Set.

*/
console.log("==== metodo add() ====");
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // No se añade porque ya existe

console.log("==== metodo has() ====");
console.log(set.has(1));  // true

console.log("==== metodo size ====");
console.log(set.size);    // 2

console.log("==== metodo delete() ====");
set.delete(2);
console.log(set.size);    // 1
set.clear();
console.log(set.size);    // 0

console.log("==== metodo clear() ====");
const setNumeros = new Set();
for (let i = 0; i < 10; i++) {
    setNumeros.add(i);
}
console.log(setNumeros);
setNumeros.clear();