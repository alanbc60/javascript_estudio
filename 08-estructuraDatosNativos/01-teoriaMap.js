/* 

  Un Map es una colección de pares clave-valor, donde cualquier valor (tanto objetos como valores primitivos)
  pueden ser usados como claves o valores.

 sintaxis:
     const/let map = new Map();

 Características:
 Orden de inserción: Los elementos en un Map se mantienen en orden de inserción.
 Tamaño: La propiedad size devuelve el número de pares clave-valor en el Map.
 Iteración: Puedes iterar sobre los pares clave-valor en su orden de inserción.

    Métodos principales:
        set(key, value): Añade o actualiza el valor de una clave.
        get(key): Devuelve el valor asociado con la clave.
        has(key): Devuelve true si la clave existe en el Map.
        delete(key): Elimina el elemento con la clave especificada.
        clear(): Elimina todos los elementos del Map
        size: Devuelve el número de elementos

*/

const map = new Map(); // creación de un Map vacío
console.log("==== metodo set() ====");

map.set('name', 'Alan');
map.set('age', 25);
map.set('carrera', 'Ingeniería de Software');
console.log(map);

console.log("==== metodo get() ====");
console.log(map.get('name')); // Alan
console.log(map.has('age'));  // true

console.log("==== metodo has() ====");
const verificacionClave = map.has('age');
console.log(`La clave exìste en el Map: ${verificacionClave} ?`); // true

console.log("==== metodo delete() ====");
map.delete('name');
console.log(map);

console.log("==== metodo size() ====");
console.log("El tamaño del Map es:",map.size);        // 2
map.delete('age');
console.log("El tamaño del Map es:",map.size);        // 1

console.log("==== metodo clear() ====");
map.clear();
console.log(map.size);        // 0